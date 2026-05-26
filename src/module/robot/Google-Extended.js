import userAgent from '../runtime/userAgent.js';

export default {
    name:'Google-Extended',
    parse(ua = userAgent){
        return {
            is:ua.includes('Google-Extended')||ua.includes('GoogleOther'),
            version:ua.match(/Google-Extended\/([\d.]+)/)?.[1]||'',
        };
    }
}