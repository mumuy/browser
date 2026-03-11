import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Windows',
    parse(ua = userAgent){
        let v = ua.match(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/)?.[1]||'';
        let hash = {
            '10.0':'10',
            '6.4':'10 Technical Preview',
            '6.3':'8.1',
            '6.2':'8',
            '6.1':'7',
            '6.0':'Vista',
            '5.2':'XP 64-bit',
            '5.1':'XP',
            '5.01':'2000 SP1',
            '5.0':'2000',
            '4.0':'NT',
            '4.90':'ME'
        };
        return {
            is:ua.includes('Windows'),
            version:hash[v] || v
        };
    },
    async version(){
        let version = this.parse().version;
        if(globalThis?.navigator?.userAgentData){
            const uaData = await globalThis.navigator.userAgentData.getHighEntropyValues(["platformVersion"]);
            if (uaData.platform === "Windows") {
                const majorPlatformVersion = parseInt(uaData.platformVersion.split('.')[0]);
                if(majorPlatformVersion>=13){
                    version = '11';
                }else{
                    version = '10';
                }
            }
        }
        return version;
    }
}