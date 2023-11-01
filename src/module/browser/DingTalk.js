export default {
    name:'DingTalk',
    match(ua){
        return ua.indexOf('DingTalk') > -1;
    },
    version(ua){
        return ua.match(/DingTalk\/([\d.]+)/)?.[1]||'';
    }
};
