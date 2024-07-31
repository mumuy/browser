import userAgent from '../runtime/userAgent.js';

export default {
    name:'Quark',
    parse(ua = userAgent){
        return {
            is:ua.includes('Quark'),
            version:ua.match(/Quark\/([\d.]+)/)?.[1]
                ||ua.match(/QuarkPC\/([\d.]+)/)?.[1]
                ||''
        };
    }
}