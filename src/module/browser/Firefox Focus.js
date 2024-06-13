export default {
    name:'Firefox Focus',
    match(ua){
        return ua.includes('Focus');
    },
    version(ua){
        return ua.match(/Focus\/([\d.]+)/)?.[1]||'';
    }
};
