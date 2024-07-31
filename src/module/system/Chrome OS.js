import userAgent from '../runtime/userAgent.js';

export default {
    name:'Chrome OS',
    parse(ua = userAgent){
        return {
            is:ua.includes('CrOS'),
            version:ua.match(/MSIE ([\d.]+)/)?.[1]
                ||ua.match(/rv:([\d.]+)/)?.[1]
                ||''
        };
    }
}