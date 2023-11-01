export default {
    name:'Googlebot',
    match(ua){
        return ua.indexOf('Googlebot') > -1;
    },
    version(ua){
        return ua.match(/Googlebot\/([\d.]+)/)?.[1]||'';
    }
};
