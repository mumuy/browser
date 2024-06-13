export default {
    name:'HONOR',
    match(ua){
        return ua.includes('HONOR')
        ||ua.includes('bdhonorbrowser/');
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]
        ||ua.match(/bdhonorbrowser\/([\d.]+)/)?.[1]||'';
    }
};
