export default {
    name:'Huawei',
    match(ua){
        return ua.includes('HuaweiBrowser')
        ||ua.includes('HUAWEI')
        ||ua.includes('HBPC/');
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]
        ||ua.match(/HuaweiBrowser\/([\d.]+)/)?.[1]
        ||ua.match(/HBPC\/([\d.]+)/)?.[1]
        ||'';
    }
};
