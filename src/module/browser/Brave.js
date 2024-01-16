import _globalThis from '../runtime/globalThis.js';

export default {
    name:'Brave',
    match(ua){
        return _globalThis?.navigator?.brave?true:false;
    },
    version(ua){
        return ua.match(/Chrome\/([\d.]+)/)?.[1]||'';
    }
};
