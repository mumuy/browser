import userAgent from '../runtime/userAgent.js';

export default {
    name:'Mobile',
    parse(ua = userAgent){
        return {
            is:ua.includes('Mobi')
                ||ua.includes('iPh')
                ||ua.includes('480')
        };
    }
}