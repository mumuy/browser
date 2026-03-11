import userAgent from '../runtime/userAgent.js';

export default {
    name:'X',
    parse(ua = userAgent){
        return {
            is:ua.includes('Twitter ')||ua.includes('TwitterAndroid'),
            version:''
        };
    }
}