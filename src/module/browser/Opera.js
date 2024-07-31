import userAgent from '../runtime/userAgent.js';

export default {
    name:'Opera',
    parse(ua = userAgent){
        return {
            is:ua.includes('Opera')
                ||ua.includes('OPR'),
            version:ua.match(/Opera\/([\d.]+)/)?.[1]
                ||ua.match(/OPR\/([\d.]+)/)?.[1]
                ||''
        };
    }
}