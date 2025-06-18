import userAgent from '../runtime/userAgent.js';

export default {
    name:'iQIYI',
    parse(ua = userAgent){
        return {
            is:ua.includes('IqiyiApp'),
            version:ua.match(/IqiyiVersion\/([\d.]+)/)?.[1]||'',
        };
    }
}