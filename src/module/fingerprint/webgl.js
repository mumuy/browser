import globalThis from '../runtime/globalThis.js';
import getMD5 from '../utils/getMD5.js';

export default {
    name:'webgl',
    async getInfo(){
        let $canvas = globalThis.document.createElement("canvas");
        $canvas.width = 256;
        $canvas.height = 128;
        let webgl = $canvas.getContext("webgl2", {
            preserveDrawingBuffer: true
        }) || $canvas.getContext("experimental-webgl2", {
            preserveDrawingBuffer: true
        }) || $canvas.getContext("webgl", {
            preserveDrawingBuffer: true
        }) || $canvas.getContext("experimental-webgl", {
            preserveDrawingBuffer: true
        }) || $canvas.getContext("moz-webgl", {
            preserveDrawingBuffer: true
        });
        let buffer = webgl.createBuffer();
        webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer);
        let sign = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .7321, 0]);
        webgl.bufferData(webgl.ARRAY_BUFFER, sign, webgl.STATIC_DRAW);
        buffer.itemSize = 3;
        buffer.numItems = 3;
        let program =  webgl.createProgram();
        let shader1 = webgl.createShader(webgl.VERTEX_SHADER);
        webgl.shaderSource(shader1, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
        webgl.compileShader(shader1);
        let shader2 = webgl.createShader(webgl.FRAGMENT_SHADER);
        webgl.shaderSource(shader2, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
        webgl.compileShader(shader2);
        webgl.attachShader(program, shader1);
        webgl.attachShader(program, shader2);
        webgl.linkProgram(program);
        webgl.useProgram(program);
        program.vertexPosAttrib = webgl.getAttribLocation(program, "attrVertex");
        program.offsetUniform = webgl.getUniformLocation(program, "uniformOffset");
        webgl.enableVertexAttribArray(program.vertexPosArray);
        webgl.vertexAttribPointer(program.vertexPosAttrib, buffer.itemSize, webgl.FLOAT, false, 0, 0);
        webgl.uniform2f(program.offsetUniform, 1, 1);
        webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, buffer.numItems);
        let unit = new Uint8Array(131072);
        webgl.readPixels(0, 0, 256, 128, webgl.RGBA, webgl.UNSIGNED_BYTE, unit);
        let hash = JSON.stringify(unit).replace(/,?"[0-9]+":/g, "");
        if("" == hash.replace(/^{[0]+}$/g, "")){
            return 'n/a';
        }else{
            return getMD5(hash);
        };
    }
};