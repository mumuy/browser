export default {
    name:'Douban',
    match(ua){
        return ua.indexOf('com.douban.frodo') > -1;
    },
    version(ua){
        return ua.match(/com.douban.frodo\/([\d.]+)/)?.[1]||'';
    }
};
