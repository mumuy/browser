import userAgent from '../runtime/userAgent.js';

export default {
    name:'Snapchat',
    parse(ua = userAgent){
        return {
            is:ua.includes('Snapchat'),
            version:ua.match(/Snapchat\/([\d.]+)/)?.[1]||''
        };
    }
}