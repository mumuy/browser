import userAgent from '../runtime/userAgent.js';

export default {
    name:'Twitterbot',
    parse(ua = userAgent){
        return {
            is:ua.includes('Twitterbot'),
            version:''
        };
    }
}