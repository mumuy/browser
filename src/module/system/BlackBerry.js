export default {
    name:'BlackBerry',
    match(ua){
        return  ua.includes('BlackBerry')||ua.includes('RIM');
    },
    version(ua){
        return '';
    }
};
