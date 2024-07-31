import userAgent from '../runtime/userAgent.js';

export default {
    name:'Iceape',
    parse(ua = userAgent){
        return {
            is:ua.includes('Iceape'),
            version:ua.match(/Iceape\/([\d.]+)/)?.[1]||'',
        };
    }
}