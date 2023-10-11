export default {
    name:'Mobile',
    match(ua){
        return ua.indexOf('Mobi') > -1 || ua.indexOf('iPh') > -1 || ua.indexOf('480') > -1;
    }
};
