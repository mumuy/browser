export default {
    name:'Samsung',
    match(ua){
        return ua.indexOf('SamsungBrowser') > -1;
    },
    version(ua){
        return ua.match(/SamsungBrowser\/([\d.]+)/)?.[1]||'';
    }
};
