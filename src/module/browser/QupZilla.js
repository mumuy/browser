export default {
    name:'QupZilla',
    match(ua){
        return ua.indexOf('QupZilla') > -1;
    },
    version(ua){
        return ua.match(/QupZilla[\/\s]([\d.]+)/)?.[1]||'';
    }
};
