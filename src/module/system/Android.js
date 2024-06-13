export default {
    name:'Android',
    match(ua){
        return ua.includes('Android')||ua.includes('Adr');
    },
    version(ua){
        return ua.match(/Android ([\d.]+);/)?.[1]||'';
    }
};
