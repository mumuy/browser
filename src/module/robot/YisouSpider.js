import userAgent from '../runtime/userAgent.js';

export default {
    name:'YisouSpider',
    parse(ua = userAgent){
        return {
            is:ua.includes('YisouSpider'),
            version:ua.match(/YisouSpider\/([\d.]+)/)?.[1]||''
        };
    }
}