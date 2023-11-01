export default {
    name:'Vivo',
    match(ua){
        return ua.indexOf('VivoBrowser') > -1;
    },
    version(ua){
        return ua.match(/VivoBrowser\/([\d.]+)/)?.[1]||'';
    }
};
