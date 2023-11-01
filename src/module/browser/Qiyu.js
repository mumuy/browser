export default {
    name:'Qiyu',
    match(ua){
        return ua.indexOf('Qiyu') > -1;
    },
    version(ua){
        return ua.match(/Qiyu\/([\d.]+)/)?.[1]||'';
    }
};
