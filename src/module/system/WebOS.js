export default {
    name:'WebOS',
    match(ua){
        return ua.indexOf('hpwOS') > -1;
    },
    version(ua){
        return ua.match(/hpwOS\/([\d.]+);/)?.[1]||'';
    }
};
