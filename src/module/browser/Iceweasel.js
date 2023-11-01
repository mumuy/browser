export default {
    name:'Iceweasel',
    match(ua){
        return ua.indexOf('Iceweasel') > -1;
    },
    version(ua){
        return ua.match(/Iceweasel\/([\d.]+)/)?.[1]||'';
    }
};
