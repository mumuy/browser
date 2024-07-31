import userAgent from '../runtime/userAgent.js';

export default {
    name:'360AI',
    parse(ua = userAgent){
        return {
            is:ua.includes('360EEAI'),
            version:ua.match(/360EE\/([\d.]+)/)?.[1]||''
        };
    }
}