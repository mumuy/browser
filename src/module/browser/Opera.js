export default {
    name:'Opera',
    match(ua){
        return ua.includes('Opera')
        ||ua.includes('OPR');
    },
    version(ua){
        return ua.match(/Opera\/([\d.]+)/)?.[1]
        ||ua.match(/OPR\/([\d.]+)/)?.[1]
        ||'';
    }
};
