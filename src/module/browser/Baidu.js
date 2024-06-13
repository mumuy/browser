export default {
    name:'Baidu',
    match(ua){
        return ua.includes('Baidu')
        ||ua.includes('BIDUBrowser')
        ||ua.includes('baidubrowser')
        ||ua.includes('baiduboxapp')
        ||ua.includes('BaiduD');
    },
    version(ua){
        return ua.match(/BIDUBrowser[\s\/]([\d.]+)/)?.[1]
        ||ua.match(/baiduboxapp\/([\d.]+)/)?.[1]
        ||'';
    }
};
