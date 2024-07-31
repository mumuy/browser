import userAgent from '../runtime/userAgent.js';

export default {
    name:'WebKit',
    parse(ua = userAgent){
        return {
            is:ua.includes('AppleWebKit')
        };
    }
}