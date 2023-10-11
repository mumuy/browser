import mime from '../method/mime';
import _360 from './360';
import _360SE from './360SE';

export default {
    name:'360EE',
    match(ua){
        if(self.document&&self.screen){
            let diff = self.screen.availWidth -  window.innerWidth;
            if(diff==6||diff==48){
                return true;
            }
        }
        return ua.indexOf('360EE') > -1||_360.match(ua)&&!_360SE.match(ua);
    },
    version(ua){
        var hash = {
            '108':'14.0',
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        var chrome_version = ua.match(/^.*Chrome\/([\d]+).*$/)?.[1]||'';
        return hash[chrome_version]||'';
    }
};
