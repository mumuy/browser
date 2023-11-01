export default {
    name:'Opera',
    match(ua){
        return ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1;
    },
    version(ua){
        return ua.match(/Opera\/([\d.]+)/)?.[1]
        ||ua.match(/OPR\/([\d.]+)/)?.[1]
        ||'';
    }
};
