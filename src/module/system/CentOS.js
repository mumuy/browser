import userAgent from '../runtime/userAgent.js';

export default {
    name:'CentOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('CentOS'),
            version:ua.match(/CentOS\/([\d.]+)/)?.[1]||''
        };
    }
}