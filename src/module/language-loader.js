import _globalThis from './runtime/globalThis.js';

export default function(_){
    _.language = (function () {
        let g = _globalThis?.navigator?.browserLanguage || _globalThis?.navigator?.language;
        if (typeof g !== 'string') return 'Unknown language'
        let arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        return arr.join('_');
    })();
};
