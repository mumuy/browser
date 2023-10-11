export default {
    name:'FreeBSD',
    match(ua){
        return ua.indexOf('FreeBSD') > -1;
    },
    version(ua){
        return '';
    }
};
