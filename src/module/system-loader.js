import _Windows from './system/Windows';
import _Linux from './system/Linux';
import _Mac_OS from './system/Mac OS';
import _Android from './system/Android';
import _HarmonyOS from './system/HarmonyOS';
import _Ubuntu from './system/Ubuntu';
import _FreeBSD from './system/FreeBSD';
import _Debian from './system/Debian';
import _iOS from './system/iOS';
import _Windows_Phone from './system/Windows Phone';
import _BlackBerry from './system/BlackBerry';
import _MeeGo from './system/MeeGo';
import _Symbian from './system/Symbian';
import _Chrome_OS from './system/Chrome OS';
import _WebOS from './system/WebOS';

export default function(_,ua){
    _.system = '';
    _.systemVersion = '';
    [_Windows, _Linux, _Mac_OS, _Android, _HarmonyOS, _Ubuntu, _FreeBSD, _Debian, _iOS, _Windows_Phone, _BlackBerry, _MeeGo, _Symbian, _Chrome_OS, _WebOS].forEach(function(item){
        if(item.match(ua)){
            _.system = item.name;
            _.systemVersion = item.version(ua);
        }
    });
    _.platform = self.navigator.platform;
};
