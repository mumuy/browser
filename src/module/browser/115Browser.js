export default {
    name:'115Browser',
    match(ua){
        return ua.indexOf('115Browser') > -1;
    },
    version(ua){
        return ua.match(/115Browser\/([\d.]+)/)?.[1]||'';
    }
};
