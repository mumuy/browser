import userAgent from '../runtime/userAgent.js';

export default {
    name:'ClaudeBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('ClaudeBot'),
            version:ua.match(/ClaudeBot\/([\d.]+)/)?.[1]||'',
        };
    }
}