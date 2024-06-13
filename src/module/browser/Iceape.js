export default {
    name:'Iceape',
    match(ua){
        return ua.includes('Iceape');
    },
    version(ua){
        return ua.match(/Iceape\/([\d.]+)/)?.[1]||'';
    }
};
