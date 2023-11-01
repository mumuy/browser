export default {
    name:'UC',
    match(ua){
        return ua.indexOf('UCBrowser') > -1 || ua.indexOf(' UBrowser') > -1 || ua.indexOf('UCWEB') > -1;
    },
    version(ua){
        return ua.match(/UC?Browser\/([\d.]+)/)?.[1]||'';
    }
};
