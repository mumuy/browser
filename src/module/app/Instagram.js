import userAgent from '../runtime/userAgent.js';

export default {
    name:'Instagram',
    parse(ua = userAgent){
        return {
            is:ua.includes('Instagram'),
            version:ua.match(/Instagram ([\d.]+)/)?.[1]||''
        };
    }
}