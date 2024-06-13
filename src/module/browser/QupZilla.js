export default {
    name:'QupZilla',
    match(ua){
        return ua.includes('QupZilla');
    },
    version(ua){
        return ua.match(/QupZilla[\/\s]([\d.]+)/)?.[1]||'';
    }
};
