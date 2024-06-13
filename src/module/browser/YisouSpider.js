export default {
    name:'YisouSpider',
    match(ua){
        return ua.includes('YisouSpider');
    },
    version(ua){
        return ua.match(/YisouSpider\/([\d.]+)/)?.[1]||'';
    }
};
