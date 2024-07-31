import userAgent from '../runtime/userAgent.js';

export default {
    name:'Lenovo',
    parse(ua = userAgent){
        return {
            is:ua.includes('SLBrowser'),
            version:ua.match(/SLBrowser\/([\d.]+)/)?.[1]||''
        };
    }
}