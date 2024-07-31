import userAgent from '../runtime/userAgent.js';

export default {
    name:'OnePlus',
    parse(ua = userAgent){
        return {
            is:ua.includes('ONEPLUS'),
            version:''
        };
    }
}