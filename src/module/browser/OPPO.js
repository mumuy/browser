export default {
    name:'OPPO',
    match(ua){
        return ua.indexOf('HeyTapBrowser') > -1 || ua.indexOf('OPPO') > -1;
    },
    version(ua){
        return ua.match(/HeyTapBrowser\/([\d.]+)/)?.[1]||'';
    }
};
