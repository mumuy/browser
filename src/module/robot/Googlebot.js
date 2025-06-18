import userAgent from '../runtime/userAgent.js';

export default {
    name:'Googlebot',
    parse(ua = userAgent){
        return {
            is:ua.includes('Googlebot'),
            version:ua.match(/Googlebot\/([\d.]+)/)?.[1]||'',
        };
    }
}