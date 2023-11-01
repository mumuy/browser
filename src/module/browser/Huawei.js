export default {
    name:'Huawei',
    match(ua){
        return ua.indexOf('HuaweiBrowser') > -1||ua.indexOf('HUAWEI/') > -1||ua.indexOf('HONOR') > -1||ua.indexOf('HBPC/') > -1;
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]
        ||ua.match(/HuaweiBrowser\/([\d.]+)/)?.[1]
        ||ua.match(/HBPC\/([\d.]+)/)?.[1]
        ||'';
    }
};
