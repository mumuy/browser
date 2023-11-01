export default {
    name:'Sogou',
    match(ua){
        return ua.indexOf('MetaSr') > -1 || ua.indexOf('Sogou') > -1;
    },
    version(ua){
        var hash = {
            '94':'12.0',
            '80':'11.0'
        };
        var chrome_version = ua.match(/Chrome\/([\d]+)/)?.[1]||'';
        return hash[chrome_version]
        ||ua.match(/SogouMobileBrowser\/([\d.]+)/)?.[1]
        ||'';
    }
};
