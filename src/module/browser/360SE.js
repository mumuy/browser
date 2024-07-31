import _Chrome from './Chrome.js';
import _360 from './360.js';
import getMime from '../method/getMime.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'360SE',
    parse(ua = userAgent){
        let hash = {
            '122':'15.3',
            '114':'15.0',
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
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('360SE'),
            version:hash[chrome_version]||''
        };
    },
    async is(){
        let isMatch = false;
        if(await _360.is()){
            if(getMime("type", "application/gameplugin")){
                isMatch = true;
            }else if(globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not.A/Brand').length){
                isMatch = true;
            }
        }
        if(!isMatch){
            return new Promise(function(resolve){
                fetch('chrome-extension://fjbbmgamncjadhlpmffehlmmkdnkiadk/css/content.css').then(function(){
                    resolve(true);
                }).catch(function(){
                    resolve(false);
                });
            });
        }
        return isMatch;
    }
}