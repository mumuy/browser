export default {
    name:'Meizu',
    match(ua){
        return ua.indexOf('MZBrowser') > -1;
    },
    version(ua){
        return ua.match(/MZBrowser\/([\d.]+)/)?.[1]||'';
    }
};