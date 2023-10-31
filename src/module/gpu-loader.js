export default function(_,ua){
    _.gpu = '';
    _.gpuModel = '';
    if(self.document){
        let $canvas = self.document.createElement('canvas'),
        webgl = $canvas.getContext('experimental-webgl'),
        debugInfo = webgl.getExtension('WEBGL_debug_renderer_info');
        let gpu_str = webgl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        _.gpu = gpu_str.match(/ANGLE \((.+?),/)?.[1]||'';
        _.gpuModel = gpu_str.match(/, (.+?) (\(|vs_)/)?.[1]||'';
    }
};