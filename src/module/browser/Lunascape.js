export default {
    name:'Lunascape',
    match(ua){
        return ua.indexOf('Lunascape') > -1;
    },
    version(ua){
        return ua.match(/Lunascape[\/\s]([\d.]+)/)?.[1]||'';
    }
};
