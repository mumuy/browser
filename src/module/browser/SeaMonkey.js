import userAgent from '../runtime/userAgent.js';

export default {
    name:'SeaMonkey',
    parse(ua = userAgent){
        return {
            is:ua.includes('SeaMonkey'),
            version:ua.match(/SeaMonkey\/([\d.]+)/)?.[1]||''
        };
    }
}
