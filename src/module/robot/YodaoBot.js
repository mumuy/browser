import userAgent from '../runtime/userAgent.js';

export default {
    name:'YodaoBot',
    parse(ua = userAgent){
        return {
            is:ua.includes('YodaoBot'),
            version:ua.match(/YodaoBot\/([\d.]+)/)?.[1]||''
        };
    }
}