import userAgent from '../runtime/userAgent.js';

export default {
    name:'Amazonbot',
    parse(ua = userAgent){
        return {
            is:ua.includes('Amazonbot'),
            version:ua.match(/Amazonbot\/([\d.]+)/)?.[1]||'',
        };
    }
}