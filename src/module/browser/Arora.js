export default {
    name:'Arora',
    match(ua){
        return ua.includes('Arora');
    },
    version(ua){
        return ua.match(/Arora\/([\d.]+)/)?.[1]||'';
    }
};
