export default {
    name:'Bingbot',
    match(ua){
        return ua.includes('bingbot');
    },
    version(ua){
        return ua.match(/bingbot\/([\d.]+)/)?.[1]||'';
    }
};
