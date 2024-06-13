export default {
    name:'Douyin',
    match(ua){
        return ua.includes('aweme');
    },
    version(ua){
        return ua.match(/app_version\/([\d.]+)/)?.[1]||'';
    }
};
