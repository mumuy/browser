export default {
    name:'Sogouspider',
    match(ua){
        return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
    },
    version(ua){
        return ua.match(/Sogou (\S+) Spider\/([\d.]+)/i)?.[1]||'';
    }
};
