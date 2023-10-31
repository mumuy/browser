import browserLoader from './module/browser-loader';
import deviceLoader from './module/device-loader';
import engineLoader from './module/engine-loader';
import systemLoader from './module/system-loader';
import gpuLoader from './module/gpu-loader';
import languageLoader from './module/language-loader';
import otherLoader from './module/other-loader';

function browser(userAgent){
    let _ = {};
    let ua = userAgent || self?.navigator?.userAgent||'';

    [
        browserLoader,
        deviceLoader,
        engineLoader,
        systemLoader,
        gpuLoader,
        languageLoader,
        otherLoader
    ].forEach(loader=>loader(_,ua));

    return _;
}

export default browser;
