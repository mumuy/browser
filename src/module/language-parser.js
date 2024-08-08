import globalThis from './runtime/globalThis.js';

export default {
    name:'language',
    parse(){
        return {};
    },
    async getInfo(){
        let g = globalThis?.navigator?.language||globalThis?.navigator?.browserLanguage;
        if (typeof g !== 'string') return 'Unknown language'
        let arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        let language = arr.join('_');

        return {
            language
        };
    }
}