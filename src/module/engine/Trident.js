export default {
    name:'Trident',
    match(ua){
        return ua.includes('Trident')||ua.includes('NET CLR');
    }
};
