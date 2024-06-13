export default {
    name:'Quark',
    match(ua){
        return ua.includes('Quark');
    },
    version(ua){
        return ua.match(/Quark\/([\d.]+)/)?.[1]||ua.match(/QuarkPC\/([\d.]+)/)?.[1]||'';
    }
};
