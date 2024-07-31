import _Chrome from './Chrome.js';
import getMime from '../method/getMime.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name: '360',
    parse(ua = userAgent){
        return {
            is:ua.includes('QihooBrowser')
                ||ua.includes('QHBrowser')
                ||ua.includes(' 360 '),
            version:ua.match(/QihooBrowser(HD)?\/([\d.]+)/)?.[1]
                ||ua.match(/Browser \(v([\d.]+)/)?.[1]
                ||''
        };
    },
    async is() {
        let isMatch = this.parse().is;
        if (globalThis?.chrome) {
            let chrome_version = parseInt(_Chrome.parse().version);
            if (getMime("type", "application/360softmgrplugin") || getMime("type", "application/mozilla-npqihooquicklogin") || getMime("type", "application/npjlgplayer3-chrome-jlp")) {
                isMatch = true;
            } else if (chrome_version > 36 && globalThis?.showModalDialog) {
                isMatch = true;
            } else if (chrome_version > 45) {
                isMatch = getMime("type", "application/vnd.chromium.remoting-viewer");
                if (!isMatch && chrome_version >= 69) {
                    isMatch = getMime("type", "application/asx");
                }
            }
        }
        return isMatch;
    }
}