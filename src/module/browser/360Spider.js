import userAgent from '../runtime/userAgent.js';

export default {
    name:'360Spider',
    parse(ua = userAgent){
        return {
            is:ua.includes('360Spider')
                ||ua.includes('HaosouSpider'),
            version:''
        };
    }
}