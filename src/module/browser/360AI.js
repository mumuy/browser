import getMime from '../method/getMime.js';
import _Chrome from './Chrome.js';
import _360 from './360.js';
import _globalThis from '../runtime/globalThis.js';

export default {
    name:'360AI',
    match(ua){
        let isMatch = false;
        if(_360.match(ua)){
            if(_globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not.A/Brand').length&&!getMime("type", "application/gameplugin")){
                isMatch = true;
            }
        }
        return ua.includes('360SEAI')||isMatch;
    },
    version(ua){
        let hash = {
            '114':'1.0'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};
