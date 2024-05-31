export default {
    name:'HONOR',
    match(ua){
        return ua.indexOf('bdhonorbrowser/') > -1;
    },
    version(ua){
        return ua.match(/bdhonorbrowser\/([\d.]+)/)?.[1]||'';
    }
};