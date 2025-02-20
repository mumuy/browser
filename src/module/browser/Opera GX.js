import _Opera from './Opera.js';
import userAgent from '../runtime/userAgent.js';

export default {
    name:'Opera GX',
    parse(ua = userAgent){
        let isMatch = false;
        if(_Opera.parse(ua).is){
            isMatch = ua.includes('Edition GX');
        }else if(ua.includes('OPX/')){
            isMatch = true;
        }
        return {
            is:isMatch,
            version:_Opera.parse(ua).version||ua.match(/OPX\/([\d.]+)/)?.[1]||''
        };
    }
}