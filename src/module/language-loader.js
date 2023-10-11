
export default function(_,$){
    _.language = (function () {
        var g = ($.navigator.browserLanguage || $.navigator.language);
        if (typeof g !== 'string') return 'Unknown language'
        var arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        return arr.join('_');
    })();
};
