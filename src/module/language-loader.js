
export default function(_,ua){
    _.language = (function () {
        let g = self?.navigator?.browserLanguage || self?.navigator?.language;
        if (typeof g !== 'string') return 'Unknown language'
        let arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        return arr.join('_');
    })();
};
