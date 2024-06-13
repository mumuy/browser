export default {
    name:'Mobile',
    match(ua){
        return ua.includes('Mobi')
        ||ua.includes('iPh')
        ||ua.includes('480');
    }
};
