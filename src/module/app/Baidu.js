import userAgent from '../runtime/userAgent.js';

export default {
    name:'Baidu',
    parse(ua = userAgent){
        return {
            is:ua.includes('Baidu')
                ||ua.includes('baiduboxapp')
                ||ua.includes('BaiduD'),
            version:ua.match(/baiduboxapp\/([\d.]+)/)?.[1]
                ||''
        };
    }
}