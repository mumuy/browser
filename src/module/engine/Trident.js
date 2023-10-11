export default {
    name:'Trident',
    match(ua){
        return ua.indexOf('Trident') > -1 || ua.indexOf('NET CLR') > -1;
    }
};
