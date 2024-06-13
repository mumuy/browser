export default {
    name:'Gecko',
    match(ua){
        return ua.includes('Gecko/');
    }
};
