import userAgent from '../runtime/userAgent.js';

export default {
    name:'Douyin',
    parse(ua = userAgent){
        return {
            is:ua.includes('aweme'),
            version:ua.match(/app_version\/([\d.]+)/)?.[1]||'',
        };
    }
}