export default {
    name:'SeaMonkey',
    match(ua){
        return ua.indexOf('SeaMonkey') > -1;
    },
    version(ua){
        return ua.match(/SeaMonkey\/([\d.]+)/)?.[1]||'';
    }
};
