export default {
    name:'Bytespider',
    match(ua){
        return ua.includes('Bytespider');
    },
    version(ua){
        return '';
    }
};
