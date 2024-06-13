export default {
    name:'TheWorld',
    match(ua){
        return ua.includes('TheWorld');
    },
    version(ua){
        return ua.match(/TheWorld ([\d.]+)/)?.[1]||'';
    }
};
