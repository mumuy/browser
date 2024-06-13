export default {
    name:'UC',
    match(ua){
        return ua.includes('UCBrowser')
        ||ua.includes(' UBrowser')
        ||ua.includes('UCWEB');
    },
    version(ua){
        return ua.match(/UC?Browser\/([\d.]+)/)?.[1]||'';
    }
};
