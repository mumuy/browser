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
import _UOS from './system/UOS.js';
import _CentOS from './system/CentOS.js';
import _Fedora from './system/Fedora.js';
import _Gentoo from './system/Gentoo.js';
import _Red_Hat from './system/Red Hat.js';
import _SUSE from './system/SUSE.js';
import _Slackware from './system/Slackware.js';

import userAgent from './runtime/userAgent.js';
import globalThis from './runtime/globalThis.js';

let systemList = [_Windows, _Linux, _macOS, _Android, _HarmonyOS, _Ubuntu, _FreeBSD, _Debian, _iOS, _Windows_Phone, _BlackBerry, _MeeGo, _Symbian, _Chrome_OS, _WebOS, _UOS, _CentOS, _Fedora, _Gentoo, _Red_Hat, _SUSE, _Slackware];
systemList.forEach(item=>{
    if(!item.is){
        item.is = async function(){
            return item.parse().is;
        };
    }
    if(!item.version){
        item.version = async function(){
            return item.parse().version;
        };
    }
});

export default {
    name:'system',
    parse(ua = userAgent){
        let system = '';
        let systemVersion = '';
        systemList.forEach(function(item){
            if(item.parse(ua).is){
                system = item.name;
                systemVersion = item.parse(ua).version;
            }
        });

        let platform = '';
        if(ua.match(/(Win64|x64|WOW64|x86_64)/i)){
            platform = 'Win64';
        }else if(ua.match(/(Win32|x86|WOW32)/i)){
            platform = 'Win32';
        }else if(ua.match(/aarch64|arm64/)){
            platform = 'ARM64';
        }else if(ua.match(/arm32/)){
            platform = 'ARM32';
        }else if(ua.match(/iPhone/)){
            platform = 'iPhone';
        }else if(ua.match(/iPad/)){
            platform = 'iPad';
        }else if(ua.match(/iPod/)){
            platform = 'iPod';
        }else if(ua.match(/Android/)){
            platform = 'Android';
        }
    
        let architecture = '';
        let keyStr = ua+'|'+platform;
        if(keyStr.match(/armv?\d+/i)){
            architecture = 'arm';
        }else if(keyStr.match(/aarch64/)){
            architecture = 'arm';
        }else if(keyStr.match(/loongarch64/)){
            architecture = 'loongarch';
        }else{
            architecture = 'x86';
        }
        let bitness = ua.match(/Win64|x64|WOW64|x86_64|aarch64|arm64|loongarch64/i)?64:32;

        return {
            system,
            systemVersion,
            platform,
            architecture,
            bitness
        };
    },
    async getInfo(){
        let {
            system,
            systemVersion,
            platform,
            architecture,
            bitness
        } = this.parse();
        for(let loader of systemList){
            if(await loader.is()){
                system = loader.name;
                systemVersion = await loader.version();
            }
        }

        if(globalThis?.navigator?.platform){
            platform = globalThis.navigator.platform;
        }
        if(globalThis?.navigator?.userAgentData){
            architecture = await globalThis.navigator.userAgentData?.getHighEntropyValues(['architecture']).then(item => item.architecture||architecture);
            bitness =  await globalThis.navigator.userAgentData?.getHighEntropyValues(['bitness']).then(item => +item.bitness||bitness);
        }
        return {
            system,
            systemVersion,
            platform,
            architecture,
            bitness
        };
    }
}