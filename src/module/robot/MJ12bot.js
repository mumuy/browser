import userAgent from '../runtime/userAgent.js';

export default {
    name:'MJ12bot',
    parse(ua = userAgent){
        return {
            is:ua.includes('MJ12bot'),
            version:ua.match(/MJ12bot\/v([\d.]+)/)?.[1]||''
        };
    }
}