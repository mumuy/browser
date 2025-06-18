import userAgent from '../runtime/userAgent.js';

export default {
    name:'Taobao',
    parse(ua = userAgent){
        return {
            is:ua.includes('AliApp(TB'),
            version:ua.match(/AliApp\(TB\/([\d.]+)/)?.[1]||''
        };
    }
}