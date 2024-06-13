export default {
    name:'360Spider',
    match(ua){
        return ua.includes('360Spider')||ua.includes('HaosouSpider');
    },
    version(ua){
        return '';
    }
};
