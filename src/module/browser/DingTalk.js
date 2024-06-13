export default {
    name:'DingTalk',
    match(ua){
        return ua.includes('DingTalk');
    },
    version(ua){
        return ua.match(/DingTalk\/([\d.]+)/)?.[1]||'';
    }
};
