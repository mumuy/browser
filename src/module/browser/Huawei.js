import userAgent from '../runtime/userAgent.js';

export default {
    name:'Huawei',
    parse(ua = userAgent){
        return {
            is:ua.includes('HuaweiBrowser')
                ||ua.includes('HBPC/'),
            version:ua.match(/HuaweiBrowser\/([\d.]+)/)?.[1]
                ||ua.match(/HBPC\/([\d.]+)/)?.[1]
                ||ua.match(/Version\/([\d.]+)/)?.[1]
                ||''
        };
    }
}