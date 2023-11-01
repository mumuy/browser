export default {
    name:'Epiphany',
    match(ua){
        return ua.indexOf('Epiphany') > -1;
    },
    version(ua){
        return ua.match(/Epiphany\/([\d.]+)/)?.[1]||'';
    }
};
