import userAgent from '../runtime/userAgent.js';

export default {
    name:'Weibo',
    parse(ua = userAgent){
        return {
            is:ua.includes('Weibo'),
            version:ua.match(/weibo__([\d.]+)/)?.[1]||''
        };
    }
}