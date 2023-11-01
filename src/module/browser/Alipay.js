export default {
    name:'Alipay',
    match(ua){
        return ua.indexOf('AliApp(AP') > -1;
    },
    version(ua){
        return ua.match(/AliApp\(AP\/([\d.]+)/)?.[1]||'';
    }
};
