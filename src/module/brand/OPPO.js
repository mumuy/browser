import userAgent from '../runtime/userAgent.js';

export default {
    name:'OPPO',
    parse(ua = userAgent){
        return {
            is:ua.includes('HeyTapBrowser')
                ||ua.includes('OPPO'),
            version:ua.match(/HeyTapBrowser\/([\d.]+)/)?.[1]||'',
        };
    }
}