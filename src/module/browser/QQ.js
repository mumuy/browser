import userAgent from '../runtime/userAgent.js';

export default {
    name:'QQ',
    parse(ua = userAgent){
        return {
            is:ua.includes('QQ'),
            version:ua.match(/QQ\/([\d.]+)/)?.[1]||'',
        };
    }
}