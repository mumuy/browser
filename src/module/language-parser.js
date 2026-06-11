import globalThis from './runtime/globalThis.js';

export default {
    name:'language',
    parse(){
        return {};
    },
    async getInfo(){
        const g = globalThis?.navigator?.language||globalThis?.navigator?.browserLanguage||globalThis?.navigator?.systemLanguage;
        if (typeof g !== 'string') return 'Unknown language'
        const arr = g.split('-');
        if (arr[1]) {
            arr[1] = arr[1].toUpperCase();
        }
        const language = arr.join('-');

        return {
            language
        };
    }
}