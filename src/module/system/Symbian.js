export default {
    name:'Symbian',
    match(ua){
        return ua.indexOf('Symbian') > -1;
    },
    version(ua){
        return '';
    }
};
