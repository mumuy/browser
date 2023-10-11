export default {
    name:'360Spider',
    match(ua){
        return ua.indexOf('360Spider') > -1||ua.indexOf('HaosouSpider')>-1;
    },
    version(ua){
        return '';
    }
};
