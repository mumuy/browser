import _Mobile from './device/Mobile.js';
import _Tablet from './device/Tablet.js';

import userAgent from './runtime/userAgent.js';

let loaderList = [_Mobile,_Tablet];
loaderList.forEach(item=>{
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
        loaderList.forEach(function(item){
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