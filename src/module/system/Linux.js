import userAgent from '../runtime/userAgent.js';

export default {
    name:'Linux',
    parse(ua = userAgent){
        return {
            is:ua.includes('Linux')||ua.includes('X11'),
            version:''
        };
    }
}