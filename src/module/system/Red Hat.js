import userAgent from '../runtime/userAgent.js';

export default {
    name:'Red Hat',
    parse(ua = userAgent){
        return {
            is:ua.includes('Red Hat'),
            version:ua.match(/Red Hat\/([\d.]+)/)?.[1]||''
        };
    }
}