import globalThis from './runtime/globalThis.js';

export default {
    name:'battery',
    parse(){
        return {};
    },
    async getInfo(){
        let isCharging = true;
        let battery = 1;
        if(globalThis?.navigator?.getBattery){
            isCharging = await globalThis.navigator.getBattery().then((battery) => {
                return battery?.charging;
            });
            battery = await globalThis.navigator.getBattery().then((battery) => {
                return +battery?.level||-1;
            });
        }

        return {
            isCharging,
            battery
        };
    }
}