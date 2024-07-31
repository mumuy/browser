import userAgent from '../runtime/userAgent.js';

export default {
    name:'iOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('like Mac OS X'),
            version:ua.match(/OS ([\d_]+) like/)?.[1].replace(/_/g, '.')||''
        };
    }
}