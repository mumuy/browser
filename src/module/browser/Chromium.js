import userAgent from '../runtime/userAgent.js';

export default {
    name:'Chromium',
    parse(ua = userAgent){
        return {
            is:ua.includes('Chromium'),
            version:ua.match(/Chromium\/([\d.]+)/)?.[1]||'',
        };
    }
}