import userAgent from '../runtime/userAgent.js';

export default {
    name:'BlackBerry',
    parse(ua = userAgent){
        return {
            is:ua.includes('BlackBerry')||ua.includes('RIM'),
            version:''
        };
    }
}