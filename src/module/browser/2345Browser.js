import _Chrome from './Chrome.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'2345Browser',
    parse(ua = userAgent){
        let hash = {
            '109':'13.0',
            '69':'10.0',
            '55':'9.9'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('2345Explorer')
                ||ua.includes('Mb2345Browser')
                ||ua.includes('2345chrome'),
            version:ua.match(/2345Explorer\/([\d.]+)/)?.[1]
                ||ua.match(/Mb2345Browser\/([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    },
    async is(){
        let isMatch = this.parse().is;
        if(!isMatch){
            isMatch = globalThis?.chrome&&(globalThis?.chrome?.adblock2345||globalThis?.chrome?.common2345);
        }
        return isMatch;
    }
}