import _globalThis from '../runtime/globalThis.js';

export default {
    name:'Tablet',
    match(ua){
        let navigator = _globalThis?.navigator||{};
        return  ua.includes('Tablet')
        ||ua.includes('Pad')
        ||ua.includes('Nexus 7')
        ||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }
};
