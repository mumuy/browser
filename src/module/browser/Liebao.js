import _Chrome from './Chrome.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Liebao',
    parse(ua = userAgent){
        let hash = {
            '112':'9.0',
            '79':'8.0',
            '57':'6.5',
            '49':'6.0',
            '46':'5.9',
            '42':'5.3',
            '39':'5.2',
            '34':'5.0',
            '29':'4.5',
            '21':'4.0'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('LBBROWSER')
                ||ua.includes('LieBaoFast'),
            version:ua.match(/LieBaoFast\/([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    },
    is(){
        return this.parse().is||globalThis?.liebao;
    }
}