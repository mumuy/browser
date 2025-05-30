import userAgent from '../runtime/userAgent.js';

export default {
    name:'Deepin',
    parse(ua = userAgent){
        return {
            is:ua.includes('Deepin'),
            version:ua.match(/Deepin ([\d.]+)/)?.[1]||''
        };
    }
}