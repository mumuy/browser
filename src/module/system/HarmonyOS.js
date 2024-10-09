import userAgent from '../runtime/userAgent.js';

export default {
    name:'HarmonyOS',
    parse(ua = userAgent){
        let version = ua.match(/HarmonyOS (\d+.\d+)/)?.[1]||ua.match(/OpenHarmony(\d+.\d+)/)?.[1]||'';
        if(!version){
            let v = +ua.match(/HMSCore (\d+.\d+)/)?.[1]||0;
            if(v>=6.1){
                version =  '4.0';
            }else if(v>=6.0){
                version =  '3.0';
            }else if(v>=5.0){
                version =  '2.0';
            }else if(v>=4.0){
                version =  '1.0';
            }
            let av = ua.match(/Android (\d+);/)?.[1]||0;
            let androidMap = {
                '10':'3.0',
                '12':'4.0'
            };
            version =  androidMap[av]??version;
        }
        return {
            is:ua.includes('HarmonyOS')||ua.includes('OpenHarmony')||ua.includes('ArkWeb'),
            version
        };
    }
}