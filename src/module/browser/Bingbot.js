export default {
    name:'Bingbot',
    match(ua){
        return ua.indexOf('bingbot') > -1;
    },
    version(ua){
        return ua.match(/bingbot\/([\d.]+)/)?.[1]||'';
    }
};
