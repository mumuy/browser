import _Chrome from './Chrome.js';
import _globalThis from '../runtime/globalThis.js';

export default {
    name:'2345Explorer',
    match(ua){
        let isMatch = _globalThis?.chrome&&(_globalThis?.chrome?.adblock2345||_globalThis?.chrome?.common2345);
        return ua.includes('2345Explorer')
        ||ua.includes('Mb2345Browser')
        ||ua.includes('2345chrome')
        ||isMatch;
    },
    version(ua){
        let hash = {
            '109':'13.0',
            '69':'10.0',
            '55':'9.9'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return ua.match(/2345Explorer\/([\d.]+)/)?.[1]
        ||ua.match(/Mb2345Browser\/([\d.]+)/)?.[1]
        ||hash[chrome_version]
        ||'';
    }
};
