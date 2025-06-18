import userAgent from '../runtime/userAgent.js';

export default {
    name:'Wechat',
    parse(ua = userAgent){
        return {
            is:ua.includes('MicroMessenger'),
            version:ua.match(/MicroMessenger\/([\d.]+)/)?.[1]||''
        };
    }
}