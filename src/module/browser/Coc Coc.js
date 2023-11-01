export default {
    name:'Coc Coc',
    match(ua){
        return ua.indexOf('coc_coc_browser') > -1;
    },
    version(ua){
        return ua.match(/coc_coc_browser\/([\d.]+)/)?.[1]||'';
    }
};
