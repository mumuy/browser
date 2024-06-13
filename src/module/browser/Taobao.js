export default {
    name:'Taobao',
    match(ua){
        return ua.includes('AliApp(TB');
    },
    version(ua){
        return ua.match(/AliApp\(TB\/([\d.]+)/)?.[1]||'';
    }
};
