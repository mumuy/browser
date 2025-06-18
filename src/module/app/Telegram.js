import userAgent from '../runtime/userAgent.js';

export default {
    name:'Telegram',
    parse(ua = userAgent){
        return {
            is:ua.includes('Telegram'),
            version:ua.match(/Telegram\/([\d.]+)/)?.[1]||''
        };
    }
}