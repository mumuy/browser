import userAgent from '../runtime/userAgent.js';

export default {
    name:'Chrome',
    parse(ua = userAgent){
        return {
            is:ua.includes('Chrome')
                ||ua.includes('CriOS'),
            version:ua.match(/Chrome\/([\d.]+)/)?.[1]
                ||ua.match(/CriOS\/([\d.]+)/)?.[1]
                ||''
        };
    }
}