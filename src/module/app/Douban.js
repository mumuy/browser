import userAgent from '../runtime/userAgent.js';

export default {
    name:'Douban',
    parse(ua = userAgent){
        return {
            is:ua.includes('com.douban.frodo'),
            version:ua.match(/com.douban.frodo\/([\d.]+)/)?.[1]||'',
        };
    }
}