import userAgent from '../runtime/userAgent.js';
import globalThis from '../runtime/globalThis.js';

export default {
    name:'Tablet',
    parse(ua = userAgent){
        return {
            is:ua.includes('Tablet')
                ||ua.includes('Pad')
                ||ua.includes('Nexus 7')
        };
    },
    async is(){
        return this.parse().is
            ||(globalThis?.navigator.platform === 'MacIntel' && globalThis?.navigator.maxTouchPoints > 1);
    }
}