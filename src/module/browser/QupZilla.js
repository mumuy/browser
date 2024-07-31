import userAgent from '../runtime/userAgent.js';

export default {
    name:'QupZilla',
    parse(ua = userAgent){
        return {
            is:ua.includes('QupZilla'),
            version:ua.match(/QupZilla[\/\s]([\d.]+)/)?.[1]||''
        };
    }
}