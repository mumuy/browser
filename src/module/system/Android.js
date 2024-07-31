import userAgent from '../runtime/userAgent.js';

export default {
    name:'Android',
    parse(ua = userAgent){
        return {
            is:ua.includes('Android')||ua.includes('Adr'),
            version:ua.match(/Android ([\d.]+);/)?.[1]||''
        };
    }
}