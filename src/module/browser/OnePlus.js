
export default {
    name:'OnePlus',
    match(ua){
        return ua.includes('ONEPLUS');
    },
    version(ua){
        return '';
    }
};