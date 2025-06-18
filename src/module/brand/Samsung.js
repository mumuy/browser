import userAgent from '../runtime/userAgent.js';

export default {
    name:'Samsung',
    parse(ua = userAgent){
        return {
            is:ua.includes('SamsungBrowser'),
            version:ua.match(/SamsungBrowser\/([\d.]+)/)?.[1]||''
        };
    }
}
