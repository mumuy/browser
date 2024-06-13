export default {
    name:'Weibo',
    match(ua){
        return ua.includes('Weibo');
    },
    version(ua){
        return ua.match(/weibo__([\d.]+)/)?.[1]||'';
    }
};
