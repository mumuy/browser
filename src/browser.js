import browserLoader from './module/browser-loader';
import deviceLoader from './module/device-loader';
import engineLoader from './module/engine-loader';
import systemLoader from './module/system-loader';
import languageLoader from './module/language-loader';

function browser(userAgent){
    let _ = this;
    let $ = {};
    $.navigator = self.navigator;
    $.userAgent = userAgent || $.navigator.userAgent||'';

    [
        browserLoader,
        deviceLoader,
        engineLoader,
        systemLoader,
        languageLoader
    ].forEach(loader=>loader(_,$));
}

export default browser;
