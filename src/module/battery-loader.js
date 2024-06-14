import _globalThis from './runtime/globalThis.js';

export default function(_){
    if(navigator?.getBattery){
        _.isCharging = navigator.getBattery().then((battery) => {
            return battery.charging;
        });
        _.battery = navigator.getBattery().then((battery) => {
            return +battery?.level||-1;
        });
    }else{
        _.isCharging = true;
        _.battery = 1;
    }
};
