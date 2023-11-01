export default {
    name:'Weibo',
    match(ua){
        return ua.indexOf('Weibo') > -1;
    },
    version(ua){
        return ua.match(/weibo__([\d.]+)/)?.[1]||'';
    }
};
