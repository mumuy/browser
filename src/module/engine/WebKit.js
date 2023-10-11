export default {
    name:'WebKit',
    match(ua){
        return ua.indexOf('AppleWebKit') > -1;
    }
};
