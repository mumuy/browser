import userAgent from '../runtime/userAgent.js';

export default {
    name:'Iceweasel',
    parse(ua = userAgent){
        return {
            is:ua.includes('Iceweasel'),
            version:ua.match(/Iceweasel\/([\d.]+)/)?.[1]||'',
        };
    }
}