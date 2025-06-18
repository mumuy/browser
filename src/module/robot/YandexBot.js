import userAgent from '../runtime/userAgent.js';

export default {
    name:'YandexBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('YandexBot'),
            version:ua.match(/YandexBot\/([\d.]+)/)?.[1]||''
        };
    }
}