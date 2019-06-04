import { throttle, getNowTime } from '../utils';
import VideoDecoder from './video/h264bsd';
import AudioDecoder from './audio';

export default class Decoder {
    constructor(flv) {
        this.flv = flv;
        this.ended = false;
        this.playing = false;
        this.waiting = false;
        this.timer = null;
        this.currentTime = 0;
        this.lastUpdateTime = 0;

        this.video = new VideoDecoder(flv, this);
        if (flv.options.hasAudio) {
            this.audio = new AudioDecoder(flv, this);
        } else {
            this.audio = {
                play: () => null,
                stop: () => null,
                playing: true,
                decoding: false,
            };
        }

        flv.on('destroy', () => {
            this.pause();
        });

        flv.on('timeupdate', currentTime => {
            if (!flv.options.live && currentTime >= flv.player.duration) {
                this.pause();
            }
        });

        flv.events.proxy(document, 'visibilitychange', () => {
            if (document.hidden && this.playing) {
                this.pause();
            }
        });

        this.seekedThrottle = throttle(() => {
            this.video.draw(this.video.playIndex);
            if (this.playing) {
                this.play();
            }
        }, 200);
    }

    play() {
        const { options, player } = this.flv;
        this.lastUpdateTime = getNowTime();
        this.video.play(this.currentTime);
        this.audio.play(this.currentTime);
        this.flv.emit('play');
        const loop = () => {
            this.timer = window.requestAnimationFrame(() => {
                if (this.video.playing && this.audio.playing) {
                    this.ended = false;
                    this.playing = true;
                    this.waiting = false;
                    const updateTime = getNowTime();
                    this.currentTime += (updateTime - this.lastUpdateTime) / 1000;
                    this.lastUpdateTime = updateTime;
                    this.flv.emit('timeupdate', this.currentTime);
                } else if (player.streaming || this.video.decoding || this.audio.decoding) {
                    this.ended = false;
                    this.playing = false;
                    this.waiting = true;
                    this.flv.emit('waiting', this.currentTime);
                    return setTimeout(() => {
                        this.play();
                    }, 1000);
                } else {
                    this.ended = true;
                    this.playing = false;
                    this.waiting = false;
                    this.flv.emit('ended', this.currentTime);
                    if (options.loop && !options.live) {
                        this.currentTime = 0;
                        return setTimeout(() => {
                            this.play();
                            this.flv.emit('loop');
                        }, 1000);
                    }
                    return this.pause();
                }
                return loop();
            });
        };
        loop();
    }

    pause() {
        window.cancelAnimationFrame(this.timer);
        this.timer = null;
        this.video.stop();
        this.audio.stop();
        this.ended = false;
        this.playing = false;
        this.waiting = false;
        this.flv.emit('pause');
    }

    seeked(time) {
        window.cancelAnimationFrame(this.timer);
        this.timer = null;
        this.currentTime = time;
        this.seekedThrottle();
        this.flv.emit('seeked');
    }
}
