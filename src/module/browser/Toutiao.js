export default {
    name:'Toutiao',
    match(ua){
        return ua.includes('NewsArticle');
    },
    version(ua){
        return ua.match(/NewsArticle\/([\d.]+)/)?.[1]||'';
    }
};