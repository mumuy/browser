export default {
    name:'Qiyu',
    match(ua){
        return ua.includes('Qiyu');
    },
    version(ua){
        return ua.match(/Qiyu\/([\d.]+)/)?.[1]||'';
    }
};
