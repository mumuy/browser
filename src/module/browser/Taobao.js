export default {
    name:'Taobao',
    match(ua){
        return ua.indexOf('AliApp(TB') > -1;
    },
    version(ua){
        return ua.match(/AliApp\(TB\/([\d.]+)/)?.[1]||'';
    }
};
