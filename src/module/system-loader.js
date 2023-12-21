import _Windows from './system/Windows.js';
import _Linux from './system/Linux.js';
import _macOS from './system/macOS.js';
import _Android from './system/Android.js';
import _HarmonyOS from './system/HarmonyOS.js';
import _Ubuntu from './system/Ubuntu.js';
import _FreeBSD from './system/FreeBSD.js';
import _Debian from './system/Debian.js';
import _iOS from './system/iOS.js';
import _Windows_Phone from './system/Windows Phone.js';
import _BlackBerry from './system/BlackBerry.js';
import _MeeGo from './system/MeeGo.js';
import _Symbian from './system/Symbian.js';
import _Chrome_OS from './system/Chrome OS.js';
import _WebOS from './system/WebOS.js';

export default function(_,isAsync){
    let ua = _.userAgent;

    _.system = '';
    _.systemVersion = '';
    [_Windows, _Linux, _macOS, _Android, _HarmonyOS, _Ubuntu, _FreeBSD, _Debian, _iOS, _Windows_Phone, _BlackBerry, _MeeGo, _Symbian, _Chrome_OS, _WebOS].forEach(function(item){
        if(item.match(ua)){
            _.system = item.name;
            _.systemVersion = item.version(ua,isAsync);
        }
    });

    _.platform = '';
    if(ua.match(/(Win64|x64|WOW64|x86_64)/i)){
        _.platform = 'Win64';
    }else if(ua.match(/(Win32|x86|WOW32)/i)){
        _.platform = 'Win32';
    }else if(ua.match(/aarch64|arm64/)){
        _.platform = 'ARM64';
    }else if(ua.match(/arm32/)){
        _.platform = 'ARM32';
    }else if(globalThis?.navigator?.platform){
        _.platform = globalThis.navigator.platform;
    }

    _.architecture = '';
    let keyStr = ua+'|'+_.platform;
    if(keyStr.match(/armv\d+/i)){
        _.architecture = 'arm';
    }else if(keyStr.match(/aarch64/)){
        _.architecture = 'arm';
    }else if(keyStr.match(/loongarch64/)){
        _.architecture = 'loongarch';
    }else{
        _.architecture = 'x86';
    }
    _.bitness = ua.match(/Win64|x64|WOW64|x86_64|aarch64|arm64|loongarch64/i)?64:32;

    if(isAsync){
        if(globalThis?.navigator?.userAgentData){
            _.architecture = navigator.userAgentData.getHighEntropyValues(['architecture']).then(item => item.architecture);
            _.bitness = navigator.userAgentData.getHighEntropyValues(['bitness']).then(item => +item.bitness);
        }
    }
};
