import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Headless',
    parse(ua = userAgent){
        return {
            is:ua.includes('HeadlessChrome/'),
            version:ua.match(/HeadlessChrome\/([\d.]+)/)?.[1]||'',
        };
    },
    async is(){
        return this.parse().is||globalThis?.navigator=='';
    }
}