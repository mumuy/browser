export default {
    name:'Chrome',
    match(ua){
        return ua.indexOf('Chrome') > -1 || ua.indexOf('CriOS') > -1;
    },
    version(ua){
        return ua.match(/Chrome\/([\d.]+)/)?.[1]
        ||ua.match(/CriOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
