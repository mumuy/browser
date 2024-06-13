export default {
    name:'Wechat',
    match(ua){
        return ua.includes('MicroMessenger');
    },
    version(ua){
        return ua.match(/MicroMessenger\/([\d.]+)/)?.[1]||'';
    }
};
