export default {
    name:'Linux',
    match(ua){
        return ua.includes('Linux')||ua.includes('X11');
    },
    version(ua){
        return '';
    }
};
