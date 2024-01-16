import _globalThis from './runtime/globalThis.js';

export default function(_){
    _.gpu = '';
    _.gpuModel = '';
    if(_globalThis?.document){
        let $canvas = _globalThis.document.createElement('canvas'),
        webgl = $canvas.getContext('experimental-webgl'),
        debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
        let gpu_str = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        _.gpu = gpu_str.match(/ANGLE \((.+?),/)?.[1]||'';
        _.gpuModel = gpu_str.match(/, (.+?) (\(|vs_)/)?.[1]||'';
    }
};