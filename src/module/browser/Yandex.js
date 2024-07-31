import userAgent from '../runtime/userAgent.js';

export default {
    name:'Yandex',
    parse(ua = userAgent){
        return {
            is:ua.includes('YaBrowser'),
            version:ua.match(/YaBrowser\/([\d.]+)/)?.[1]||''
        };
    }
}