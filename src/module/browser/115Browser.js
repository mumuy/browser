export default {
    name:'115Browser',
    match(ua){
        return ua.includes('115Browser');
    },
    version(ua){
        return ua.match(/115Browser\/([\d.]+)/)?.[1]||'';
    }
};
