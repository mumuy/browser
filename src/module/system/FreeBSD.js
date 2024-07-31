import userAgent from '../runtime/userAgent.js';

export default {
    name:'FreeBSD',
    parse(ua = userAgent){
        return {
            is:ua.includes('FreeBSD'),
            version:''
        };
    }
}