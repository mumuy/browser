export default {
    name:'Alipay',
    match(ua){
        return ua.includes('AliApp(AP');
    },
    version(ua){
        return ua.match(/AliApp\(AP\/([\d.]+)/)?.[1]||'';
    }
};
