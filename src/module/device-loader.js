import _Mobile from './device/Mobile.js';
import _Tablet from './device/Tablet.js';

import userAgent from './runtime/userAgent.js';

let deviceList = [_Mobile,_Tablet];
deviceList.forEach(item=>{
    if(!item.is){
        item.is = async function(){
            return item.parse().is;
        };
    }
});

export default {
    name:'device',
    parse(ua = userAgent){
        let device = 'Desktop';
        deviceList.forEach(function(item){
            if(item.parse(ua).is){
                device = item.name;
            }
        });

        return {
            device
        };
    },
    async getInfo(){
        return this.parse();
    }
}