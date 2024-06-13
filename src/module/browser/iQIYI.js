export default {
    name:'iQIYI',
    match(ua){
        return ua.includes('IqiyiApp');
    },
    version(ua){
        return ua.match(/IqiyiVersion\/([\d.]+)/)?.[1]||'';
    }
};
