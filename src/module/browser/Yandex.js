export default {
    name:'Yandex',
    match(ua){
        return ua.indexOf('YaBrowser') > -1;
    },
    version(ua){
        return ua.match(/YaBrowser\/([\d.]+)/)?.[1]||'';
    }
};
