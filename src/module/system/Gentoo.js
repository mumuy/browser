import userAgent from '../runtime/userAgent.js';

export default {
    name:'Gentoo',
    parse(ua = userAgent){
        return {
            is:ua.includes('Gentoo'),
            version:''
        };
    }
}