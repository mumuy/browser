import userAgent from '../runtime/userAgent.js';

export default {
    name:'Line',
    parse(ua = userAgent){
        return {
            is:ua.includes('Line/'),
            version:ua.match(/Line\/([\d.]+)/)?.[1]||''
        };
    }
}