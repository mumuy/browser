export default {
    name:'TheWorld',
    match(ua){
        return ua.indexOf('TheWorld') > -1;
    },
    version(ua){
        return ua.match(/TheWorld ([\d.]+)/)?.[1]||'';
    }
};
