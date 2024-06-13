export default {
    name:'YodaoBot',
    match(ua){
        return ua.includes('YodaoBot');
    },
    version(ua){
        return ua.match(/YodaoBot\/([\d.]+)/)?.[1]||'';
    }
};
