export default {
    name:'Debian',
    match(ua){
        return ua.includes('Debian');
    },
    version(ua){
        return ua.match(/Debian\/([\d.]+)/)?.[1]||'';
    }
};
