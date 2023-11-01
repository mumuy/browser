export default {
    name:'Xiaomi',
    match(ua){
        return ua.indexOf('MiuiBrowser') > -1;
    },
    version(ua){
        return ua.match(/MiuiBrowser\/([\d.]+)/)?.[1]||'';
    }
};
