import userAgent from '../runtime/userAgent.js';

export default {
    name:'Slackware',
    parse(ua = userAgent){
        return {
            is:ua.includes('Slackware'),
            version:ua.match(/Slackware\/([\d.]+)/)?.[1]||''
        };
    }
}