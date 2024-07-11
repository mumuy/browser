export default {
    name:'Sogou',
    match(ua){
        return ua.includes('MetaSr')|| ua.includes('Sogou');
    },
    version(ua){
        var hash = {
            '94':'12.0',
            '80':'11.0'
        };
        var chrome_version = ua.match(/Chrome\/([\d]+)/)?.[1]||'';
        return ua.match(/SogouMobileBrowser\/([\d.]+)/)?.[1]
        ||ua.match(/SogouMSE\/([\d.]+)/)?.[1]
        ||hash[chrome_version]
        ||'';
    }
};
