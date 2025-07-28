import _Chrome from './Chrome.js';
import userAgent from '../runtime/userAgent.js';

export default {
    name:'Sogou',
    parse(ua = userAgent){
        var hash = {
            '116':'13.0',
            '94':'12.0',
            '80':'11.0'
        };
        var chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('MetaSr')|| ua.includes('Sogou'),
            version:ua.match(/SogouMobileBrowser\/([\d.]+)/)?.[1]
                ||ua.match(/SogouMSE\/([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    }
}