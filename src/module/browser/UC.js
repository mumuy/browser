import userAgent from '../runtime/userAgent.js';

export default {
    name:'UC',
    parse(ua = userAgent){
        return {
            is:ua.includes('UCBrowser')
                ||ua.includes(' UBrowser')
                ||ua.includes('UCWEB'),
            version:ua.match(/UC?Browser\/([\d.]+)/)?.[1]||''
        };
    }
}