export default {
    name:'Android',
    match(ua){
        return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
    },
    version(ua){
        return ua.match(/Android ([\d.]+);/)?.[1]||'';
    }
};
