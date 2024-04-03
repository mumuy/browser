export default {
    name:'Lenovo',
    match(ua){
        return ua.indexOf('SLBrowser') > -1;
    },
    version(ua){
        return ua.match(/SLBrowser\/([\d.]+)/)?.[1]||'';
    }
};
