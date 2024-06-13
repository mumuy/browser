export default {
    name:'Lenovo',
    match(ua){
        return ua.includes('SLBrowser');
    },
    version(ua){
        return ua.match(/SLBrowser\/([\d.]+)/)?.[1]||'';
    }
};
