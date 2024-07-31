import userAgent from '../runtime/userAgent.js';

export default {
    name:'macOS',
    parse(ua = userAgent){
        return {
            is:ua.includes('Macintosh'),
            version:ua.match(/Mac OS X -?([\d_]+)/)?.[1].replace(/_/g, '.')||''
        };
    }
}