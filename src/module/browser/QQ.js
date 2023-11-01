export default {
    name:'QQ',
    match(ua){
        return ua.indexOf('QQ/') > -1;
    },
    version(ua){
        return ua.match(/QQ\/([\d.]+)/)?.[1]||'';
    }
};
