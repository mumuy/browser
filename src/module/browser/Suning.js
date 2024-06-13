export default {
    name:'Suning',
    match(ua){
        return ua.includes('SNEBUY-APP');
    },
    version(ua){
        return ua.match(/SNEBUY-APP([\d.]+)/)?.[1]||'';
    }
};
