import userAgent from '../runtime/userAgent.js';

export default {
    name:'Sogouspider',
    parse(ua = userAgent){
        return {
            is:ua.match(/Sogou (\S+) Spider\/([\d.]+)/i),
            version:ua.match(/Sogou (\S+) Spider\/([\d.]+)/i)?.[1]||''
        };
    }
}