export default {
    name:'Brave',
    match(ua){
        return self?.navigator?.brave?true:false;
    },
    version(ua){
        return ua.match(/Chrome\/([\d.]+)/)?.[1]||'';
    }
};
