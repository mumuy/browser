import _Chrome from './Chrome.js';
import _360 from './360.js';
import getMime from '../method/getMime.js';
import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'360AI',
    parse(ua = userAgent){
        let hash = {
            '114':'1.0'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('360SEAI'),
            version:hash[chrome_version]||''
        };
    },
    async is(){
        let isMatch = this.parse().is;
        if(await _360.is()){
            if(globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not.A/Brand').length&&!getMime("type", "application/gameplugin")){
                isMatch = true;
            }
        }
        return isMatch;
    }
}