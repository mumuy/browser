import userAgent from '../runtime/userAgent.js';

export default {
    name:'HarmonyOS',
    parse(ua = userAgent){
        let v = +ua.match(/HMSCore (\d+.\d+)/)?.[1]||0;
        let version = '';
        if(v>=6.1){
            version =  '4.0';
        }else if(v>=6.0){
            version =  '3.0';
        }else if(v>=5.0){
            version =  '2.0';
        }else if(v>=4.0){
            version =  '1.0';
        }
        return {
            is:ua.includes('HarmonyOS'),
            version
        };
    }
}