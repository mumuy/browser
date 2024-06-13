export default {
    name:'Windows Phone',
    match(ua){
        return ua.includes('IEMobile')||ua.includes('Windows Phone');
    },
    version(ua){
        return ua.match(/Windows Phone( OS)? ([\d.]+);/)?.[2]||'';
    }
};
