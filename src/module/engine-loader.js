import _WebKit from './engine/WebKit.js';
import _Trident from './engine/Trident.js';
import _Gecko from './engine/Gecko.js';
import _Servo from './engine/Servo.js';
import _Presto from './engine/Presto.js';
import _KHTML from './engine/KHTML.js';

import _Edge from './browser/Edge.js';
import _Chrome from './browser/Chrome.js';

import userAgent from './runtime/userAgent.js';

let loaderList = [_WebKit, _Trident, _Gecko, _Servo, _Presto, _KHTML];
loaderList.forEach(item=>{
    if(!item.is){
        item.is = async function(){
            return item.parse().is;
        };
    }
});

export default {
    name:'engine',
    parse(ua = userAgent){
        let engine = '';
        loaderList.forEach(function(item){
            if(item.parse(ua).is){
                engine = item.name;
            }
        });

        //修正
        if (_Edge.parse(ua).is) {
            engine = parseInt(_Edge.parse(ua).version)>75?'Blink':'EdgeHTML';
        } else if (_Chrome.parse(ua).is&&parseInt(_Chrome.parse(ua).version) > 27) {
            engine = 'Blink';
        }
        return {
            engine
        };
    },
    async getInfo(){
        return this.parse();
    }
}