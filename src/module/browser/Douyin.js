export default {
    name:'Douyin',
    match(ua){
        return ua.indexOf('aweme') > -1;
    },
    version(ua){
        return ua.match(/app_version\/([\d.]+)/)?.[1]||'';
    }
};
