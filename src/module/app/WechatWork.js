import userAgent from '../runtime/userAgent.js';

export default {
    name:'WechatWork',
    parse(ua = userAgent){
        return {
            is:ua.includes('wxwork'),
            version:ua.match(/wxwork\/([\d.]+)/)?.[1]||''
        };
    }
}