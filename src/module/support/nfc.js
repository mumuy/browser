import globalThis from '../runtime/globalThis.js';

export default {
    name:'nfc',
    is(){
        return "NDEFReader" in globalThis;
    }
};