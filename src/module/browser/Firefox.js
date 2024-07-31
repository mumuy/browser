import userAgent from '../runtime/userAgent.js';

export default {
    name:'Firefox',
    parse(ua = userAgent){
        return {
            is:ua.includes('Firefox')
                ||ua.includes('FxiOS'),
            version:ua.match(/Firefox\/([\d.]+)/)?.[1]
                ||ua.match(/FxiOS\/([\d.]+)/)?.[1]
                ||'',
        };
    }
}