import userAgent from '../runtime/userAgent.js';

export default {
    name:'SemrushBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('SemrushBot'),
            version:ua.match(/SemrushBot\/([\d.]+)/)?.[1]||''
        };
    }
}