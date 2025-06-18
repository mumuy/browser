import userAgent from '../runtime/userAgent.js';

export default {
    name:'Bytespider',
    parse(ua = userAgent){
        return {
            is:ua.includes('Bytespider'),
            version:''
        };
    }
}