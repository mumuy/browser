export default {
    name:'IE',
    match(ua){
        return ua.includes('MSIE')
        ||ua.includes('Trident');
    },
    version(ua){
        return ua.match(/MSIE ([\d.]+)/)?.[1]
        ||ua.match(/rv:([\d.]+)/)?.[1]
        ||'';
    }
};
