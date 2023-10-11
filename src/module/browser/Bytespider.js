export default {
    name:'Bytespider',
    match(ua){
        return ua.indexOf('Bytespider') > -1;
    },
    version(ua){
        return '';
    }
};
