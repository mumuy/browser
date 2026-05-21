import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';
import _Tizen from '../system/Tizen.js';
import _watchOS from '../system/watchOS.js';
import _Wear_OS from '../system/Wear OS.js';

export default {
    name:'Wearable',
    parse(ua = userAgent){
        return {
            is: _Tizen.parse(ua).is
                ||_watchOS.parse(ua).is
                ||_Wear_OS.parse(ua).is
                ||userAgent.includes('Wearable'),
            version:_Tizen.parse(ua).version
                ||_watchOS.parse(ua).version
                ||_Wear_OS.parse(ua).version
        };
    }
}