export default {
    name:'QQBrowser',
    match(ua){
        return ua.includes('QQBrowser');
    },
    version(ua){
        return ua.match(/QQBrowser\/([\d.]+)/)?.[1]||'';
    }
};
