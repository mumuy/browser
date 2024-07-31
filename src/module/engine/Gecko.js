import userAgent from '../runtime/userAgent.js';

export default {
    name:'Gecko',
    parse(ua = userAgent){
        return {
            is:ua.includes('Gecko/')
        };
    }
}
