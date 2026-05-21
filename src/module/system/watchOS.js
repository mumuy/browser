import userAgent from '../runtime/userAgent.js';

export default {
    name:'watchOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('watchOS')||ua.includes('Apple Watch'),
            version:ua.match(/watchOS ([\d_]+)/)?.[1].replace(/_/g, '.')||''
        };
    }
}