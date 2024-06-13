export default {
    name:'QQ',
    match(ua){
        return ua.includes('QQ/');
    },
    version(ua){
        return ua.match(/QQ\/([\d.]+)/)?.[1]||'';
    }
};
