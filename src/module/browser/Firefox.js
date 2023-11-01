export default {
    name:'Firefox',
    match(ua){
        return ua.indexOf('Firefox') > -1 || ua.indexOf('FxiOS') > -1;
    },
    version(ua){
        return ua.match(/Firefox\/([\d.]+)/)?.[1]
        ||ua.match(/FxiOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
