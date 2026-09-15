import userAgent from '../runtime/userAgent.js';

export default {
    name:'AhrefsBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('AhrefsBot'),
            version:ua.match(/AhrefsBot\/([\d.]+)/)?.[1]||''
        };
    }
}