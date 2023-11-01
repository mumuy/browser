export default {
    name:'Vivaldi',
    match(ua){
        return ua.indexOf('Vivaldi') > -1;
    },
    version(ua){
        return ua.match(/Vivaldi\/([\d.]+)/)?.[1]||'';
    }
};
