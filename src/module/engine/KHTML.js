export default {
    name:'KHTML',
    match(ua){
        return ua.indexOf('KHTML/') > -1;
    }
};
