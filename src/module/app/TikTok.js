import userAgent from '../runtime/userAgent.js';

export default {
    name:'TikTok',
    parse(ua = userAgent){
        return {
            is:ua.includes('TikTok'),
            version:ua.match(/TikTok\/([\d.]+)/)?.[1]||''
        };
    }
}