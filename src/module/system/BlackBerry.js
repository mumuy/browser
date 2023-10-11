export default {
    name:'BlackBerry',
    match(ua){
        return  ua.indexOf('BlackBerry') > -1 || ua.indexOf('RIM') > -1;
    },
    version(ua){
        return '';
    }
};
