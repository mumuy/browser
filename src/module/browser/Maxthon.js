export default {
    name:'Maxthon',
    match(ua){
        return ua.indexOf('Maxthon') > -1||self.maxthon;
    },
    version(ua){
        var hash = {
            '109':'7.0',
            '78':'6.0'
        };
        var chrome_version = ua.match(/^.*Chrome\/([\d]+).*$/)?.[1]||'';
        return hash[chrome_version]||ua.match(/^.*Maxthon\/([\d.]+).*$/)?.[1]||'';
    }
};
