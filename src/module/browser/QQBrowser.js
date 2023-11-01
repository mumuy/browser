export default {
    name:'QQBrowser',
    match(ua){
        return ua.indexOf('QQBrowser') > -1;
    },
    version(ua){
        return ua.match(/QQBrowser\/([\d.]+)/)?.[1]||'';
    }
};
