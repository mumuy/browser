import userAgent from '../runtime/userAgent.js';

export default {
    name:'MeeGo',
    parse(ua = userAgent){
        return {
            is:ua.includes('MeeGo'),
            version:''
        };
    }
}