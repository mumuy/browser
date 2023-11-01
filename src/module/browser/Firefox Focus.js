export default {
    name:'Firefox Focus',
    match(ua){
        return ua.indexOf('Focus') > -1;
    },
    version(ua){
        return ua.match(/Focus\/([\d.]+)/)?.[1]||'';
    }
};
