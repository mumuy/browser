export default {
    name:'Ubuntu',
    match(ua){
        return ua.includes('Ubuntu');
    },
    version(ua){
        return '';
    }
};
