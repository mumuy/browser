import userAgent from '../runtime/userAgent.js';

export default {
    name:'nubia',
    parse(ua = userAgent){
        return {
            is:ua.includes('nubia'),
            version:''
        };
    }
}