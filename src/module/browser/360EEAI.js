import _Chrome from './Chrome.js';

export default {
    name:'360AI', // 360EEAI
    match(ua){
        return ua.includes('360EEAI');
    },
    version(ua){
        return ua.match(/360EE\/([\d.]+)/)?.[1]||'';
    }
};