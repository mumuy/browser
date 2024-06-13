export default {
    name:'Iceweasel',
    match(ua){
        return ua.includes('Iceweasel');
    },
    version(ua){
        return ua.match(/Iceweasel\/([\d.]+)/)?.[1]||'';
    }
};
