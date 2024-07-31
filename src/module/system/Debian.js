import userAgent from '../runtime/userAgent.js';

export default {
    name:'Debian',
    parse(ua = userAgent){
        return {
            is:ua.includes('Debian'),
            version:ua.match(/Debian\/([\d.]+)/)?.[1]||''
        };
    }
}