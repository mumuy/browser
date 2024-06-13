export default {
    name:'Firefox',
    match(ua){
        return ua.includes('Firefox')
        ||ua.includes('FxiOS');
    },
    version(ua){
        return ua.match(/Firefox\/([\d.]+)/)?.[1]
        ||ua.match(/FxiOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
