import userAgent from '../runtime/userAgent.js';

export default {
    name:'Presto',
    parse(ua = userAgent){
        return {
            is:ua.includes('Presto')
        };
    }
}