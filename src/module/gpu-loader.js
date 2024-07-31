import globalThis from './runtime/globalThis.js';

export default {
    name:'gpu',
    parse(){
        return {};
    },
    async getInfo(){
        let gpu = '';
        let gpuModel = '';
        if(globalThis?.document){
            let $canvas = globalThis.document.createElement('canvas');
            let webgl = $canvas.getContext('experimental-webgl');
            if(webgl){
                let debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
                let gpu_str = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                gpu = gpu_str.match(/ANGLE \((.+?),/)?.[1]||'';
                gpuModel = gpu_str.match(/, (.+?) (\(|vs_)/)?.[1]||'';
            }
        }

        return {
            gpu,
            gpuModel
        };
    }
}