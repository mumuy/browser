export default {
    name:'FreeBSD',
    match(ua){
        return ua.includes('FreeBSD');
    },
    version(ua){
        return '';
    }
};
