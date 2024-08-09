import globalThis from '../runtime/globalThis.js';

export default {
    name:'webgl',
    is(){
        if (!globalThis?.document) {
            return false;
        }
        const $canvas = globalThis.document.createElement('canvas');
        const gl =  $canvas.getContext('webgl')||$canvas.getContext('experimental-webgl');
        return gl&&gl instanceof WebGLRenderingContext;
    }
};