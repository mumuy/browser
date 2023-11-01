export default {
    name:'Baidu',
    match(ua){
        return ua.indexOf('Baidu') > -1 || ua.indexOf('BIDUBrowser') > -1 || ua.indexOf('baidubrowser') > -1|| ua.indexOf('baiduboxapp') > -1 || ua.indexOf('BaiduD') > -1;
    },
    version(ua){
        return ua.match(/BIDUBrowser[\s\/]([\d.]+)/)?.[1]
        ||ua.match(/baiduboxapp\/([\d.]+)/)?.[1]
        ||'';
    }
};
