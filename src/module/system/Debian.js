export default {
    name:'Debian',
    match(ua){
        return ua.indexOf('Debian') > -1;
    },
    version(ua){
        return ua.match(/Debian\/([\d.]+)/)?.[1]||'';
    }
};
