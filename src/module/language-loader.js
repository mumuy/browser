
export default function(_){
    _.language = (function () {
        let g = globalThis?.navigator?.browserLanguage || globalThis?.navigator?.language;
        if (typeof g !== 'string') return 'Unknown language'
        let arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        return arr.join('_');
    })();
};
