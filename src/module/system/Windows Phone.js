export default {
    name:'Windows Phone',
    match(ua){
        return ua.indexOf('IEMobile') > -1 || ua.indexOf('Windows Phone')>-1;
    },
    version(ua){
        return ua.match(/Windows Phone( OS)? ([\d.]+);/)?.[2]||'';
    }
};
