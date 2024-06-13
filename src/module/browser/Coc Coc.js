export default {
    name:'Coc Coc',
    match(ua){
        return ua.includes('coc_coc_browser');
    },
    version(ua){
        return ua.match(/coc_coc_browser\/([\d.]+)/)?.[1]||'';
    }
};
