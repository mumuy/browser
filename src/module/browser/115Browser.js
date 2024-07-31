import userAgent from '../runtime/userAgent.js';

export default {
    name:'115Browser',
    parse(ua = userAgent){
        return {
            is:ua.includes('115Browser'),
            version:ua.match(/115Browser\/([\d.]+)/)?.[1]||''
        };
    }
}