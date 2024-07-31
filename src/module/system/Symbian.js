import userAgent from '../runtime/userAgent.js';

export default {
    name:'Symbian',
    parse(ua = userAgent){
        return {
            is:ua.includes('Symbian'),
            version:ua.match(/Series60\/([\d.]+)/)?.[1]||''
        };
    }
}