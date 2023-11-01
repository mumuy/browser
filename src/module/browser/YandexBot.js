export default {
    name:'YandexBot',
    match(ua){
        return ua.indexOf('YandexBot') > -1;
    },
    version(ua){
        return ua.match(/YandexBot\/([\d.]+)/)?.[1]||'';
    }
};
