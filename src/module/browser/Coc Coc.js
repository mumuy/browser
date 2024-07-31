import userAgent from '../runtime/userAgent.js';

export default {
    name:'Coc Coc',
    parse(ua = userAgent){
        return {
            is:ua.includes('coc_coc_browser'),
            version:ua.match(/coc_coc_browser\/([\d.]+)/)?.[1]||'',
        };
    }
}