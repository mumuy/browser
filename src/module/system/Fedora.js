import userAgent from '../runtime/userAgent.js';

export default {
    name:'Fedora',
    parse(ua = userAgent){
        return {
            is:ua.includes('Fedora'),
            version:ua.match(/Fedora\/([\d.]+)/)?.[1]||''
        };
    }
}