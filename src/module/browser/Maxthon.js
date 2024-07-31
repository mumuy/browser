import _Chrome from './Chrome.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Maxthon',
    parse(ua = userAgent){
        let hash = {
            '109':'7.0',
            '78':'6.0'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('Maxthon'),
            version:ua.match(/Maxthon\/([\d.]+)/)?.[1]
                ||ua.match(/Version\/([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    },
    is(){
        return this.parse().is||globalThis?.maxthon;
    }
}