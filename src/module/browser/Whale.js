import userAgent from '../runtime/userAgent.js';

export default {
    name:'Whale',
    parse(ua = userAgent){
        return {
            is:ua.includes('Whale/'),
            version:ua.match(/Whale\/([\d.]+)/)?.[1]||''
        };
    }
}