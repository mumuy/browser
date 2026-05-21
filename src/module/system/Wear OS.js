import userAgent from '../runtime/userAgent.js';

export default {
    name:'Wear OS',
    parse(ua = userAgent){
        return {
            is:ua.includes('Wear OS'),
            version:ua.match(/Wear OS ([\d.]+)/)?.[1]
                ||''
        };
    }
}