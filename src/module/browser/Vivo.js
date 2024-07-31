import userAgent from '../runtime/userAgent.js';

export default {
    name:'Vivo',
    parse(ua = userAgent){
        return {
            is:ua.includes('VivoBrowser'),
            version:ua.match(/VivoBrowser\/([\d.]+)/)?.[1]||''
        };
    }
}