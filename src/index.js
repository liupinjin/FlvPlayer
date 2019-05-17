import Emitter from 'tiny-emitter';
import checkSupport from './utils/checkSupport';
import optionValidator from './utils/optionValidator';
import Debug from './debug';
import Events from './events';
import Workers from './workers';
import Parse from './parse';
import Demuxer from './demuxer';
import Decoder from './decoder';
import Stream from './stream';
import Player from './player';
import Controls from './controls';

let id = 0;
class FlvPlayer extends Emitter {
    constructor(options) {
        super();
        checkSupport();
        this.options = Object.assign({}, FlvPlayer.options, options);
        optionValidator(this);

        this.debug = new Debug(this);
        this.events = new Events(this);
        this.workers = new Workers(this);
        this.player = new Player(this);
        this.parse = new Parse(this);
        this.demuxer = new Demuxer(this);
        this.decoder = new Decoder(this);
        this.stream = new Stream(this);
        this.controls = new Controls(this);

        this.le = (function le() {
            const buf = new ArrayBuffer(2);
            new DataView(buf).setInt16(0, 256, true);
            return new Int16Array(buf)[0] === 256;
        })();

        id += 1;
        this.id = id;
        FlvPlayer.instances.push(this);
    }

    static get options() {
        return {
            url: '',
            element: null,
            debug: false,
            live: false,
            controls: true,
            width: 400,
            height: 300,
            header: {},
        };
    }

    static get version() {
        return '__VERSION__';
    }

    static get env() {
        return '__ENV__';
    }

    destroy() {
        this.events.destroy();
        this.workers.destroy();
        FlvPlayer.instances.splice(FlvPlayer.instances.indexOf(this), 1);
        this.emit('destroy');
    }
}

Object.defineProperty(FlvPlayer, 'instances', {
    value: [],
});

export default FlvPlayer;
