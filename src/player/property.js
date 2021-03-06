import { clamp } from '../utils';

export default function property(flv, player) {
    Object.defineProperty(player, 'rect', {
        get: () => {
            return player.$container.getBoundingClientRect();
        },
    });

    ['bottom', 'height', 'left', 'right', 'top', 'width'].forEach(key => {
        Object.defineProperty(player, key, {
            get: () => {
                return player.rect[key];
            },
        });
    });

    Object.defineProperty(player, 'currentTime', {
        get: () => {
            return flv.decoder.currentTime;
        },
        set: time => {
            if (flv.options.cache) {
                flv.decoder.seeked(clamp(time, 0, player.loaded));
            }
        },
    });

    Object.defineProperty(player, 'streaming', {
        get: () => {
            return flv.demuxer.streaming;
        },
    });

    Object.defineProperty(player, 'demuxed', {
        get: () => {
            return flv.demuxer.demuxed;
        },
    });

    Object.defineProperty(player, 'videoDecoding', {
        get: () => {
            return flv.decoder.video.decoding;
        },
    });

    Object.defineProperty(player, 'audioDecoding', {
        get: () => {
            return flv.decoder.audio.decoding;
        },
    });

    Object.defineProperty(player, 'duration', {
        get: () => {
            try {
                return flv.demuxer.scripMeta.amf2.metaData.duration || flv.options.duration;
            } catch (error) {
                return flv.options.duration;
            }
        },
    });

    Object.defineProperty(player, 'frameRate', {
        get: () => {
            const defaultFrameRate = Math.round(flv.options.frameRate || 30);
            try {
                return Math.round(flv.demuxer.scripMeta.amf2.metaData.framerate) || defaultFrameRate;
            } catch (error) {
                return defaultFrameRate;
            }
        },
    });

    Object.defineProperty(player, 'frameDuration', {
        get: () => {
            return (1000 / player.frameRate) | 0;
        },
    });

    Object.defineProperty(player, 'muted', {
        get: () => {
            return flv.decoder.audio.muted;
        },
        set: value => {
            flv.decoder.audio.muted = value;
        },
    });

    Object.defineProperty(player, 'volume', {
        get: () => {
            try {
                return flv.decoder.audio.volume;
            } catch (error) {
                return 0;
            }
        },
        set: value => {
            try {
                flv.decoder.audio.volume = clamp(value, 0, 1);
                return player.volume;
            } catch (error) {
                return value;
            }
        },
    });

    Object.defineProperty(player, 'loaded', {
        get: () => {
            return flv.decoder.video.loaded;
        },
    });

    Object.defineProperty(player, 'playing', {
        get: () => {
            return flv.decoder.playing;
        },
    });

    Object.defineProperty(player, 'ended', {
        get: () => {
            return flv.decoder.ended;
        },
    });

    Object.defineProperty(player, 'play', {
        value: () => {
            if (!player.playing) {
                flv.decoder.play();
            }
        },
    });

    Object.defineProperty(player, 'pause', {
        value: () => {
            flv.decoder.pause();
        },
    });

    Object.defineProperty(player, 'toggle', {
        value: () => {
            if (player.playing) {
                player.pause();
            } else {
                player.play();
            }
        },
    });
}
