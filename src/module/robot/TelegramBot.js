import userAgent from '../runtime/userAgent.js';

export default {
    name:'TelegramBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('TelegramBot'),
            version:''
        };
    }
}