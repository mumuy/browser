import userAgent from '../runtime/userAgent.js';

export default {
    name:'Yahoo',
    parse(ua = userAgent){
        return {
            is:ua.includes('Yahoo!'),
            version:''
        };
    }
}