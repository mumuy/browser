export default {
    name:'Ubuntu',
    match(ua){
        return ua.indexOf('Ubuntu') > -1;
    },
    version(ua){
        return '';
    }
};
