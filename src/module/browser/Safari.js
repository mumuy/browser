export default {
    name:'Safari',
    match(ua){
        return ua.indexOf('Safari') > -1;
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]||'';
    }
};
