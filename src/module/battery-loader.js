import _globalThis from './runtime/globalThis.js';

export default function(_){
    if(_globalThis?.navigator?.getBattery){
        _.isCharging = _globalThis.navigator.getBattery().then((battery) => {
            return battery.charging;
        });
        _.battery = _globalThis.navigator.getBattery().then((battery) => {
            return +battery?.level||-1;
        });
    }else{
        _.isCharging = true;
        _.battery = 1;
    }
};
