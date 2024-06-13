export default {
    name:'KHTML',
    match(ua){
        return ua.includes('KHTML/');
    }
};
