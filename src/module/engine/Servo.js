import userAgent from '../runtime/userAgent.js';

export default {
    name:'Servo',
    parse(ua = userAgent){
        return {
            is:ua.includes('Servo/')
        };
    }
}