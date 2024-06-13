export default {
    name:'Xiaomi',
    match(ua){
        return ua.includes('MiuiBrowser');
    },
    version(ua){
        return ua.match(/MiuiBrowser\/([\d.]+)/)?.[1]||'';
    }
};
