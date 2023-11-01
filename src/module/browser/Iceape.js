export default {
    name:'Iceape',
    match(ua){
        return ua.indexOf('Iceape') > -1;
    },
    version(ua){
        return ua.match(/Iceape\/([\d.]+)/)?.[1]||'';
    }
};
