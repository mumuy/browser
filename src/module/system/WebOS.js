export default {
    name:'WebOS',
    match(ua){
        return ua.includes('hpwOS');
    },
    version(ua){
        return ua.match(/hpwOS\/([\d.]+);/)?.[1]||'';
    }
};
