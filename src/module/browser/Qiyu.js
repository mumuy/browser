import userAgent from '../runtime/userAgent.js';

export default {
    name:'Qiyu',
    parse(ua = userAgent){
        return {
            is:ua.includes('Qiyu'),
            version:ua.match(/Qiyu\/([\d.]+)/)?.[1]||'',
        };
    }
}