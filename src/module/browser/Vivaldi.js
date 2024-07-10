import _globalThis from '../runtime/globalThis.js';

export default {
    name:'Vivaldi',
    match(ua){
        let isMatch = false;
        if(_globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not:A-Brand').length){
            isMatch = true;
        }
        return ua.includes('Vivaldi')||isMatch;
    },
    version(ua){
        return ua.match(/Vivaldi\/([\d.]+)/)?.[1]||ua.match(/Chrome\/([\d.]+)/)?.[1]||'';
    }
};
