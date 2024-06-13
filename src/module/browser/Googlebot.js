export default {
    name:'Googlebot',
    match(ua){
        return ua.includes('Googlebot');
    },
    version(ua){
        return ua.match(/Googlebot\/([\d.]+)/)?.[1]||'';
    }
};
