export default {
    name:'Wechat',
    match(ua){
        return ua.indexOf('MicroMessenger') > -1;
    },
    version(ua){
        return ua.match(/MicroMessenger\/([\d.]+)/)?.[1]||'';
    }
};
