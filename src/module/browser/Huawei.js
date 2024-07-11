export default {
    name:'Huawei',
    match(ua){
        return ua.includes('HuaweiBrowser')
        ||ua.includes('HBPC/');
    },
    version(ua){
        return ua.match(/HuaweiBrowser\/([\d.]+)/)?.[1]
        ||ua.match(/HBPC\/([\d.]+)/)?.[1]
        ||ua.match(/Version\/([\d.]+)/)?.[1]
        ||'';
    }
};
