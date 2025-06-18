import userAgent from '../runtime/userAgent.js';

export default {
    name:'WhatsApp',
    parse(ua = userAgent){
        return {
            is:ua.includes('WhatsApp'),
            version:ua.match(/WhatsApp\/([\d.]+)/)?.[1]||''
        };
    }
}