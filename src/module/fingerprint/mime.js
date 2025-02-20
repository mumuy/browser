import globalThis from '../runtime/globalThis.js';
import getMD5 from '../utils/getMD5.js';

export default {
    name:'mime',
    async getInfo(){
        let mimeTypes = [];
        if(globalThis?.navigator?.mimeTypes){
            mimeTypes = Array.from(globalThis.navigator.mimeTypes).map(item=>item.type);
        }
        return getMD5(mimeTypes.join(','));
    }
};