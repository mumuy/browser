export default {
    name:'Maxthon',
    match(ua){
        return ua.indexOf('Maxthon') > -1;
    },
    version(ua){
        return ua.match(/^.*Maxthon\/([\d.]+).*$/)?.[1]||'';
    }
};
