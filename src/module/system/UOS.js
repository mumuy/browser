import userAgent from '../runtime/userAgent.js';

export default {
    name:'UOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('UOS'),
            version:ua.match(/UOS\/([\d.]+)/)?.[1]||''
        };
    }
}