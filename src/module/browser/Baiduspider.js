import userAgent from '../runtime/userAgent.js';

export default {
    name:'Baiduspider',
    parse(ua = userAgent){
        return {
            is:ua.includes('Baiduspider'),
            version:ua.match(/Baiduspider(-render)?\/([\d.]+)/)?.[1]||''
        };
    }
}