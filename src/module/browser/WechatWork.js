export default {
    name:'WechatWork',
    match(ua){
        return ua.includes('wxwork/');
    },
    version(ua){
        return ua.match(/wxwork\/([\d.]+)/)?.[1]||'';
    }
};
