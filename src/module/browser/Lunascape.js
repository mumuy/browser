import userAgent from '../runtime/userAgent.js';

export default {
    name:'Lunascape',
    parse(ua = userAgent){
        return {
            is:ua.includes('Lunascape'),
            version:ua.match(/Lunascape[\/\s]([\d.]+)/)?.[1]||''
        };
    }
}