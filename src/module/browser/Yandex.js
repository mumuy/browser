export default {
    name:'Yandex',
    match(ua){
        return ua.includes('YaBrowser');
    },
    version(ua){
        return ua.match(/YaBrowser\/([\d.]+)/)?.[1]||'';
    }
};
