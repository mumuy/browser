export default {
    name:'Epiphany',
    match(ua){
        return ua.includes('Epiphany');
    },
    version(ua){
        return ua.match(/Epiphany\/([\d.]+)/)?.[1]||'';
    }
};
