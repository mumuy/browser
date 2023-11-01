export default {
    name:'YisouSpider',
    match(ua){
        return ua.indexOf('YisouSpider') >-1;
    },
    version(ua){
        return ua.match(/YisouSpider\/([\d.]+)/)?.[1]||'';
    }
};
