export default {
    name:'Symbian',
    match(ua){
        return ua.includes('Symbian');
    },
    version(ua){
        return ua.match(/Series60\/([\d.]+)/)?.[1]||'';
    }
};
