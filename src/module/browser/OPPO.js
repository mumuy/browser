export default {
    name:'OPPO',
    match(ua){
        return ua.includes('HeyTapBrowser')
        ||ua.includes('OPPO');
    },
    version(ua){
        return ua.match(/HeyTapBrowser\/([\d.]+)/)?.[1]||'';
    }
};
