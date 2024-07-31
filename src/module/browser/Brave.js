import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Brave',
    parse(ua = userAgent){
        return {
            is:ua.includes('Brave'),
            version:ua.match(/Chrome\/([\d.]+)/)?.[1]||''
        };
    },
    is: async function(){
        return this.parse().is||globalThis?.navigator?.brave?true:false
    }
}