import userAgent from '../runtime/userAgent.js';

export default {
    name:'Firefox Focus',
    parse(ua = userAgent){
        return {
            is:ua.includes('Focus'),
            version:ua.match(/Focus\/([\d.]+)/)?.[1]||'',
        };
    }
}