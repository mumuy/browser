export default {
    name:'Samsung',
    match(ua){
        return ua.includes('SamsungBrowser');
    },
    version(ua){
        return ua.match(/SamsungBrowser\/([\d.]+)/)?.[1]||'';
    }
};
