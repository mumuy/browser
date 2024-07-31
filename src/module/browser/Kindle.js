import userAgent from '../runtime/userAgent.js';

export default {
    name:'Kindle',
    parse(ua = userAgent){
        return {
            is:ua.includes('Kindle')|| ua.includes('Silk/'),
            version:ua.match(/Version\/([\d.]+)/)?.[1]||''
        };
    }
}