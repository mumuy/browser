import userAgent from '../runtime/userAgent.js';

export default {
    name:'WebOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('hpwOS'),
            version:ua.match(/hpwOS\/([\d.]+);/)?.[1]||''
        };
    }
}