export default {
    name:'Douban',
    match(ua){
        return ua.includes('com.douban.frodo');
    },
    version(ua){
        return ua.match(/com.douban.frodo\/([\d.]+)/)?.[1]||'';
    }
};
