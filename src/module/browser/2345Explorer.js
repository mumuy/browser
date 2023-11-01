import _Chrome from './Chrome';

export default {
    name:'2345Explorer',
    match(ua){
        let isMatch = self?.chrome&&(self?.chrome?.adblock2345||self?.chrome?.common2345);
        return ua.indexOf('2345Explorer') > -1||ua.indexOf('Mb2345Browser') > -1||ua.indexOf('2345chrome') > -1||isMatch;
    },
    version(ua){
        let hash = {
            '69':'10.0',
            '55':'9.9'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]
        ||u.match(/2345Explorer\/([\d.]+)/)?.[1]
        ||ua.match(/Mb2345Browser\/([\d.]+)/)?.[1]
        ||'';
    }
};
