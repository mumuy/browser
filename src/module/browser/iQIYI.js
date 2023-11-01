export default {
    name:'iQIYI',
    match(ua){
        return ua.indexOf('IqiyiApp') > -1;
    },
    version(ua){
        return ua.match(/IqiyiVersion\/([\d.]+)/)?.[1]||'';
    }
};
