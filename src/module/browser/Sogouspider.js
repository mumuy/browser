export default {
    name:'Sogouspider',
    match(ua){
        return ua.match(/Sogou (\S+) Spider\/([\d.]+)/i);
    },
    version(ua){
        return ua.match(/Sogou (\S+) Spider\/([\d.]+)/i)?.[1]||'';
    }
};
