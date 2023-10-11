export default {
    name:'Presto',
    match(ua){
        return ua.indexOf('Presto') > -1;
    }
};
