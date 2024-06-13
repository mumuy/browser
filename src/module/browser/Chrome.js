export default {
    name:'Chrome',
    match(ua){
        return ua.includes('Chrome')||ua.includes('CriOS');
    },
    version(ua){
        return ua.match(/Chrome\/([\d.]+)/)?.[1]
        ||ua.match(/CriOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
