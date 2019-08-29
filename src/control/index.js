import './style.scss';
import template from './template';
import observer from './observer';
import hotkey from './hotkey';
import property from './property';
import events from './events';
import { proxyPropertys } from '../utils';

export default class Control {
    constructor(flv) {
        template(flv, this);
        observer(flv, this);
        events(flv, this);
        property(flv, this);
        proxyPropertys(flv, this);
        if (!flv.isMobile) {
            hotkey(flv, this);
        }
    }
}