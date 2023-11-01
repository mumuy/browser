export default {
    name:'WechatWork',
    match(ua){
        return ua.indexOf('wxwork/') > -1;
    },
    version(ua){
        return ua.match(/wxwork\/([\d.]+)/)?.[1]||'';
    }
};
