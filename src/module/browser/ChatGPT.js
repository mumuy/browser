import userAgent from '../runtime/userAgent.js';

export default {
    name:'ChatGPT',
    parse(ua = userAgent){
        return {
            is:ua.includes('OAI-SearchBot')||ua.includes('ChatGPT-User')||ua.includes('GPTBot'),
            version:ua.match(/OAI-SearchBot\/([\d.]+)/)?.[1]
            ||ua.match(/ChatGPT-User\/([\d.]+)/)?.[1]
            ||ua.match(/GPTBot\/([\d.]+)/)?.[1]
            ||''
        };
    }
}