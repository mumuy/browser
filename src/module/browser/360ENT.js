import _Chrome from './Chrome.js';
import userAgent from '../runtime/userAgent.js';

export default {
    name:'360ENT',
    parse(ua = userAgent){
        let hash = {
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('360ENT'),
            version:ua.match(/Browser \(v([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    }
}