import userAgent from '../runtime/userAgent.js';

export default {
    name:'DingTalk',
    parse(ua = userAgent){
        return {
            is:ua.includes('DingTalk'),
            version:ua.match(/DingTalk\/([\d.]+)/)?.[1]||'',
        };
    }
}