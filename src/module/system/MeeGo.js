export default {
    name:'MeeGo',
    match(ua){
        return ua.indexOf('MeeGo') > -1;
    },
    version(ua){
        return '';
    }
};
