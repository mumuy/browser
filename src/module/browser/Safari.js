import userAgent from '../runtime/userAgent.js';

export default {
    name:'Safari',
    parse(ua = userAgent){
        return {
            is:ua.includes('Safari'),
            version:ua.match(/Version\/([\d.]+)/)?.[1]||''
        };
    }
}