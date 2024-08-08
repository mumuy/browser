import globalThis from './runtime/globalThis.js';
import getPublicIP from './method/getPublicIP.js';

export default {
    name:'network',
    parse(){
        return {};
    },
    async getInfo(){
        let network = 'unknown';
        let connection = globalThis?.navigator?.connection;
        if(connection){
            network = connection.type || connection.effectiveType;
            if(network == '2' || network == 'unknown'){
                network = 'wifi';
            }
        }
        let isOnline = globalThis?.navigator?.onLine||false;
        let ip = await getPublicIP();
        return {
            network,
            isOnline,
            ip
        };
    }
}