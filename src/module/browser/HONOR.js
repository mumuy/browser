export default {
    name:'HONOR',
    match(ua){
        return ua.includes('HONOR')
        ||ua.includes('bdhonorbrowser/');
    },
    version(ua){
        return ua.match(/bdhonorbrowser\/([\d.]+)/)?.[1]
        ||ua.match(/Version\/([\d.]+)/)?.[1]
        ||'';
    }
};
