export default {
    name:'YodaoBot',
    match(ua){
        return ua.indexOf('YodaoBot') >-1;
    },
    version(ua){
        return ua.match(/YodaoBot\/([\d.]+)/)?.[1]||'';
    }
};
