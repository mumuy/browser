import userAgent from '../runtime/userAgent.js';

export default {
    name:'Konqueror',
    parse(ua = userAgent){
        return {
            is:ua.includes('Konqueror'),
            version:ua.match(/Konqueror\/([\d.]+)/)?.[1]||''
        };
    }
}