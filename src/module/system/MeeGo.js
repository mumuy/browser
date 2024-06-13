export default {
    name:'MeeGo',
    match(ua){
        return ua.includes('MeeGo');
    },
    version(ua){
        return '';
    }
};
