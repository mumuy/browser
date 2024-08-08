import _Chrome from './Chrome.js';
import _360 from './360.js';
import userAgent from '../runtime/userAgent.js';
import getMime from '../method/getMime.js';

export default {
    name:'360EE',
    parse(ua = userAgent){
        let hash = {
            '122':'22.3',       // 360极速X
            '119':'22.0',       // 360极速X
            '108':'14.0',       // 360极速
            '95':'21.0',        // 360极速X
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        let chrome_version = parseInt(_Chrome.parse(ua).version);
        return {
            is:ua.includes('360EE'),
            version:ua.match(/Browser \(v([\d.]+)/)?.[1]
                ||hash[chrome_version]
                ||''
        };
    },
    async is(){
        let isMatch = this.parse().is;
        if(getMime('type','application/cenroll.cenroll.version.1')||getMime('type','application/hwepass2001.installepass2001')){
            isMatch = true;
        }else if(await _360.is()){
            if(globalThis?.navigator?.userAgentData?.brands.find(item=>item.brand=='Not A(Brand'||item.brand=='Not?A_Brand')){
                isMatch = true;
            }
        }
        return isMatch;
    }
}