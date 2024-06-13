import _globalThis from './runtime/globalThis.js';

export default function(_){
    _.isCharging = navigator.getBattery().then((battery) => {
        return battery.charging;
    });
    _.battery = navigator.getBattery().then((battery) => {
        return +battery?.level||1;
    });
};
