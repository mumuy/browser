export default {
    name:'YandexBot',
    match(ua){
        return ua.includes('YandexBot');
    },
    version(ua){
        return ua.match(/YandexBot\/([\d.]+)/)?.[1]||'';
    }
};
