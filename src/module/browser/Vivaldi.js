import _globalThis from '../runtime/globalThis.js';

export default {
    name:'Vivaldi',
    match(ua){
        return ua.includes('Vivaldi');
    },
    version(ua){
        return ua.match(/Vivaldi\/([\d.]+)/)?.[1]||ua.match(/Chrome\/([\d.]+)/)?.[1]||'';
    }
};
