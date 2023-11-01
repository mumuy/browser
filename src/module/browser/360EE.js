import mime from '../method/mime';
import _Chrome from './Chrome';
import _360 from './360';
import _360SE from './360SE';

export default {
    name:'360EE',
    match(ua){
        let isMatch = false;
        if(mime('type','application/cenroll.cenroll.version.1')||mime('type','application/hwepass2001.installepass2001')){
            isMatch = true;
        }else if(_360.match(ua)){
            if(!_360SE.match(ua)){
                isMatch = true;
            }else if(self?.navigator?.userAgentData.brands.filter(item=>item.brand=='Not A(Brand').length){
                isMatch = true;
            }
        }
        return ua.indexOf('360EE') > -1||isMatch;
    },
    version(ua){
        let hash = {
            '119':'(X)22.0',
            '108':'14.0',
            '95':'(X)21.0',
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};
