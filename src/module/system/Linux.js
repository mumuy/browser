export default {
    name:'Linux',
    match(ua){
        return ua.indexOf('Linux') > -1 || ua.indexOf('X11') > -1;
    },
    version(ua){
        return '';
    }
};
