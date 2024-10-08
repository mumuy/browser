import globalThis from '../runtime/globalThis.js';
import getMD5 from '../utils/getMD5.js';

export default {
    name:'canvas',
    async getInfo(){
        let $canvas = globalThis.document.createElement("canvas");
        $canvas.width = 1000;
        $canvas.height = 200;
        let context = $canvas.getContext("2d");
        context.textBaseline = "alphabetic";
        context.fillStyle = "#f60";
        context.fillRect(150, 50, 100, 100);
        context.fillStyle = "#069";
        context.font = "12pt Arial";
        context.fillText("😃just for test the canvas feature!", 3, 15);
        context.fillStyle = "rgba(102, 204, 0, 0.2)";
        context.font = "18pt Arial";
        context.fillText("😃just for test the canvas feature!", 6, 45);
        context.globalCompositeOperation = "multiply";
        context.fillStyle = "rgb(0,255,255)";
        context.beginPath();
        context.arc(50, 100, 50, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        context.fillStyle = "rgb(255,0,255)";
        context.beginPath();
        context.arc(75, 50, 50, 0, Math.PI * 2, true),
        context.closePath();
        context.fill();
        context.fillStyle = "rgb(255,255,0)";
        context.beginPath();
        context.arc(100, 100, 50, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();
        let rawData = $canvas.toDataURL();
        return getMD5(rawData);
    }
};
