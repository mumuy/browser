export default {
    name:'Safari',
    match(ua){
        return ua.includes('Safari');
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]||'';
    }
};
