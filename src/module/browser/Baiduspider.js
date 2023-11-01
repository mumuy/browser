export default {
    name:'Baiduspider',
    match(ua){
        return ua.indexOf('Baiduspider') > -1;
    },
    version(ua){
        return ua.match(/Baiduspider(-render)?\/([\d.]+)/)?.[1]||'';
    }
};
