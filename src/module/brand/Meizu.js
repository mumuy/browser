import userAgent from '../runtime/userAgent.js';

export default {
    name:'Meizu',
    parse(ua = userAgent){
        return {
            is:ua.includes('MZBrowser'),
            version:ua.match(/MZBrowser\/([\d.]+)/)?.[1]||''
        };
    }
}