export default {
    name:'SeaMonkey',
    match(ua){
        return ua.includes('SeaMonkey');
    },
    version(ua){
        return ua.match(/SeaMonkey\/([\d.]+)/)?.[1]||'';
    }
};
