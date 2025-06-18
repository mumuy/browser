import userAgent from '../runtime/userAgent.js';

export default {
    name:'HONOR',
    parse(ua = userAgent){
        return {
            is:ua.includes('HONOR')
                ||ua.includes('bdhonorbrowser/'),
            version:ua.match(/bdhonorbrowser\/([\d.]+)/)?.[1]
                ||ua.match(/Version\/([\d.]+)/)?.[1]
                ||''
        };
    }
}