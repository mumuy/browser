import userAgent from '../runtime/userAgent.js';

export default {
    name:'TheWorld',
    parse(ua = userAgent){
        return {
            is:ua.includes('TheWorld'),
            version:ua.match(/TheWorld ([\d.]+)/)?.[1]||''
        };
    }
}