import userAgent from '../runtime/userAgent.js';

export default {
    name:'Bingbot',
    parse(ua = userAgent){
        return {
            is:ua.includes('bingbot'),
            version:ua.match(/bingbot\/([\d.]+)/)?.[1]||''
        };
    }
}