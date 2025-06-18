import userAgent from '../runtime/userAgent.js';

export default {
    name:'Suning',
    parse(ua = userAgent){
        return {
            is:ua.includes('SNEBUY-APP'),
            version:ua.match(/SNEBUY-APP([\d.]+)/)?.[1]||''
        };
    }
}