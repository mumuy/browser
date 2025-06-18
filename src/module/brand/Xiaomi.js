import userAgent from '../runtime/userAgent.js';

export default {
    name:'Xiaomi',
    parse(ua = userAgent){
        return {
            is:ua.includes('MiuiBrowser'),
            version:ua.match(/115Browser\/([\d.]+)/)?.[1]||''
        };
    }
}