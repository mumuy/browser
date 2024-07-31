import userAgent from '../runtime/userAgent.js';

export default {
    name:'Windows Phone',
    parse(ua = userAgent){
        return {
            is:ua.includes('IEMobile')||ua.includes('Windows Phone'),
            version:ua.match(/Windows Phone( OS)? ([\d.]+);/)?.[2]||''
        };
    }
}