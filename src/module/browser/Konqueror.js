export default {
    name:'Konqueror',
    match(ua){
        return ua.indexOf('Konqueror') > -1;
    },
    version(ua){
        return ua.match(/Konqueror\/([\d.]+)/)?.[1]||'';
    }
};
