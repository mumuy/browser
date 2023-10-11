export default {
    name:'Gecko',
    match(ua){
        return ua.indexOf('Gecko/') > -1;
    }
};
