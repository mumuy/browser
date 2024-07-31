import userAgent from '../runtime/userAgent.js';

export default {
    name:'Toutiao',
    parse(ua = userAgent){
        return {
            is:ua.includes('NewsArticle'),
            version:ua.match(/NewsArticle\/([\d.]+)/)?.[1]||''
        };
    }
}