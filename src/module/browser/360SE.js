import mime from '../method/mime';
import _Chrome from './Chrome';
import _360 from './360';

export default {
    name:'360SE',
    match(ua){
        let navigator = self.navigator;
        let isMatch = false;
        if(_360.match(ua)){
            if(mime("type", "application/gameplugin")){
                isMatch = true;
            }else if(navigator && typeof navigator['connection'] !== 'undefined' && typeof navigator['connection']['saveData'] == 'undefined'){
                isMatch = true;
            }
        }
        return ua.indexOf('360SE') > -1||isMatch;
    },
    version(ua){
        let hash = {
            '108':'14.0',
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'10.0',
            '55':'9.1',
            '45':'8.1',
            '42':'8.0',
            '31':'7.0',
            '21':'6.3'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};
