export default {
    name:'WebKit',
    match(ua){
        return ua.includes('AppleWebKit');
    }
};
