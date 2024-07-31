import userAgent from '../runtime/userAgent.js';

export default {
    name:'Ubuntu',
    parse(ua = userAgent){
        return {
            is:ua.includes('Ubuntu'),
            version:''
        };
    }
}