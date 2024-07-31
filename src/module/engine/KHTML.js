import userAgent from '../runtime/userAgent.js';

export default {
    name:'KHTML',
    parse(ua = userAgent){
        return {
            is:ua.includes('KHTML/')
        };
    }
}