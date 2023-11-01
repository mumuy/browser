export default {
    name:'Quark',
    match(ua){
        return ua.indexOf('Quark') > -1;
    },
    version(ua){
        return ua.match(/Quark\/([\d.]+)/)?.[1]||'';
    }
};
