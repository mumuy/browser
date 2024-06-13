export default {
    name:'Baiduspider',
    match(ua){
        return ua.includes('Baiduspider');
    },
    version(ua){
        return ua.match(/Baiduspider(-render)?\/([\d.]+)/)?.[1]||'';
    }
};
