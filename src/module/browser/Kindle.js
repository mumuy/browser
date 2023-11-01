export default {
    name:'Kindle',
    match(ua){
        return ua.indexOf('Kindle') > -1 || ua.indexOf('Silk/') > -1;
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]||'';
    }
};
