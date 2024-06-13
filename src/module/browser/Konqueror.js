export default {
    name:'Konqueror',
    match(ua){
        return ua.includes('Konqueror');
    },
    version(ua){
        return ua.match(/Konqueror\/([\d.]+)/)?.[1]||'';
    }
};
