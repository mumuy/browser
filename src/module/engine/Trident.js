import userAgent from '../runtime/userAgent.js';

export default {
    name:'Trident',
    parse(ua = userAgent){
        return {
            is:ua.includes('Trident')||ua.includes('NET CLR')
        };
    }
}