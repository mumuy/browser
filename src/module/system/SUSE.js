import userAgent from '../runtime/userAgent.js';

export default {
    name:'SUSE',
    parse(ua = userAgent){
        return {
            is:ua.includes('SUSE'),
            version:ua.match(/SUSE\/([\d.]+)/)?.[1]||''
        };
    }
}