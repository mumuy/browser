import userAgent from '../runtime/userAgent.js';

export default {
    name:'Epiphany',
    parse(ua = userAgent){
        return {
            is:ua.includes('Epiphany'),
            version:ua.match(/Epiphany\/([\d.]+)/)?.[1]||'',
        };
    }
}
