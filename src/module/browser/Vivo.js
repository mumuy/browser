export default {
    name:'Vivo',
    match(ua){
        return ua.includes('VivoBrowser');
    },
    version(ua){
        return ua.match(/VivoBrowser\/([\d.]+)/)?.[1]||'';
    }
};
