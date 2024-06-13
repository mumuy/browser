export default {
    name:'Meizu',
    match(ua){
        return ua.includes('MZBrowser');
    },
    version(ua){
        return ua.match(/MZBrowser\/([\d.]+)/)?.[1]||'';
    }
};
