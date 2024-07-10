import _Chrome from './Chrome.js';

export default {
    name:'360ENT',
    match(ua){
        return ua.includes('360ENT');
    },
    version(ua){
        let hash = {
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'9.5',
            '55':'9.0',
            '50':'8.7',
            '30':'7.5'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};