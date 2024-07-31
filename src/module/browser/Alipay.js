import userAgent from '../runtime/userAgent.js';

export default {
    name:'Alipay',
    parse(ua = userAgent){
        return {
            is:ua.includes('AliApp(AP'),
            version:ua.match(/AliApp\(AP\/([\d.]+)/)?.[1]||''
        };
    }
}