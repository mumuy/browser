import getMime from '../method/getMime.js';
import _globalThis from '../runtime/globalThis.js';

export default {
    name: '360',
    match(ua) {
        let isMatch = false;
        if (_globalThis?.chrome) {
            let chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
            if (getMime("type", "application/360softmgrplugin") || getMime("type", "application/mozilla-npqihooquicklogin") || getMime("type", "application/npjlgplayer3-chrome-jlp")) {
                isMatch = true;
            } else if (chrome_version > 36 && _globalThis?.showModalDialog) {
                isMatch = true;
            } else if (chrome_version > 45) {
                isMatch = getMime("type", "application/vnd.chromium.remoting-viewer");
                if (!isMatch && chrome_version >= 69) {
                    isMatch = getMime("type", "application/asx");
                }
            }
        }
        return ua.includes('QihooBrowser')
        ||ua.includes('QHBrowser')
        ||ua.includes(' 360 ')
        ||isMatch;
    },
    version(ua) {
        return ua.match(/QihooBrowser(HD)?\/([\d.]+)/)?.[1]
        ||ua.match(/Browser \(v([\d.]+)/)?.[1]
        ||'';
    }
};
