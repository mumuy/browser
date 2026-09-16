import globalThis from './runtime/globalThis.js';
import getPublicIP from './method/getPublicIP.js';

export default {
    name:'network',
    parse(){
        return {};
    },
    async getInfo(){
        let network = 'unknown';
        let bandWidth = 0;
        let connection = globalThis?.navigator?.connection;
        if(connection){
            network = connection.type || connection.effectiveType;
            bandWidth = connection.downlink || 0;
            if(network == '2' || network == 'unknown'){
                network = 'wifi';
            }
        }
        let isOnline = globalThis?.navigator?.onLine||false;
        let ip = await getPublicIP();
        return {
            network,
            bandWidth,
            isOnline,
            ip
        };
    }
}