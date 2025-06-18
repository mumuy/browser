import userAgent from '../runtime/userAgent.js';

export default {
    name:'BaiduBrowser',
    parse(ua = userAgent){
        return {
            is:ua.includes('BIDUBrowser')
                ||ua.includes('baidubrowser'),
            version:ua.match(/BIDUBrowser[\s\/]([\d.]+)/)?.[1]
                ||''
        };
    }
}