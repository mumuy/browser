import userAgent from '../runtime/userAgent.js';

export default {
    name:'Tizen',
    parse(ua = userAgent){
        return {
            is:ua.includes('Tizen'),
            version:ua.match(/Tizen ([\d.]+)/)?.[1]||''
        };
    }
}