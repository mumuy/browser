import userAgent from '../runtime/userAgent.js';

export default {
    name:'Arora',
    parse(ua = userAgent){
        return {
            is:ua.includes('Arora'),
            version:ua.match(/Arora\/([\d.]+)/)?.[1]||''
        };
    }
}