export default {
    name:'Lunascape',
    match(ua){
        return ua.includes('Lunascape');
    },
    version(ua){
        return ua.match(/Lunascape[\/\s]([\d.]+)/)?.[1]||'';
    }
};
