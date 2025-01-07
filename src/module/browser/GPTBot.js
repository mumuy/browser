import userAgent from '../runtime/userAgent.js';

export default {
    name:'GPTBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('GPTBot'),
            version:ua.match(/GPTBot\/([\d.]+)/)?.[1]||''
        };
    }
}