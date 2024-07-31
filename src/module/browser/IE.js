import userAgent from '../runtime/userAgent.js';

export default {
    name:'IE',
    parse(ua = userAgent){
        return {
            is:ua.includes('MSIE')
                ||ua.includes('Trident'),
            version:ua.match(/MSIE ([\d.]+)/)?.[1]
                ||ua.match(/rv:([\d.]+)/)?.[1]
                ||''
        };
    }
}