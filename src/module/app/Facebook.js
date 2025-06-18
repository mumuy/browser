import userAgent from '../runtime/userAgent.js';

export default {
    name:'Facebook',
    parse(ua = userAgent){
        return {
            is:ua.includes('Facebook')||ua.includes('FBAV/'),
            version:ua.match(/FBAV\/([\d.]+)/)?.[1]||''
        };
    }
}