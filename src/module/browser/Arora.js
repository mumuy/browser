export default {
    name:'Arora',
    match(ua){
        return ua.indexOf('Arora') > -1;
    },
    version(ua){
        return ua.match(/Arora\/([\d.]+)/)?.[1]||'';
    }
};
