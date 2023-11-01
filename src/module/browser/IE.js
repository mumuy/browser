export default {
    name:'IE',
    match(ua){
        return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
    },
    version(ua){
        return ua.match(/MSIE ([\d.]+)/)?.[1]
        ||ua.match(/rv:([\d.]+)/)?.[1]
        ||'';
    }
};
