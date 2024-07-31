import userAgent from '../runtime/userAgent.js';

export default {
    name:'QQBrowser',
    parse(ua = userAgent){
        return {
            is:ua.includes('QQBrowser'),
            version:ua.match(/QQBrowser\/([\d.]+)/)?.[1]||'',
        };
    }
}