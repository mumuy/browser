export default {
    name:'Suning',
    match(ua){
        return ua.indexOf('SNEBUY-APP') > -1;
    },
    version(ua){
        return ua.match(/SNEBUY-APP([\d.]+)/)?.[1]||'';
    }
};
