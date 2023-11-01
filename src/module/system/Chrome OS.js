export default {
    name:'Chrome OS',
    match(ua){
        return ua.indexOf('CrOS') > -1;
    },
    version(ua){
        return ua.match(/MSIE ([\d.]+)/)?.[1]
        ||ua.match(/rv:([\d.]+)/)?.[1]
        ||'';
    }
};
