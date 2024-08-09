import globalThis from '../runtime/globalThis.js';

export default {
    name:'font-family',
    is(value='Arial'){
        if (typeof value != 'string'||!globalThis?.document) {
            return false;
        }
        let defaultValue = "Arial";
        let world = "永";
        let fontSize = 100;
        let width = 100,
            height = 100;
        let $canvas = globalThis.document.createElement("canvas");
        let context = $canvas.getContext("2d",{willReadFrequently:true});
        $canvas.width = width;
        $canvas.height = height;
        context.textAlign = "center";
        context.fillStyle = "black";
        context.textBaseline = "middle";
        let test = function(fontFamily) {
            context.clearRect(0, 0, width, height);
            context.font = `${fontSize}px ${fontFamily}, ${defaultValue}`;
            context.fillText(world, width/2, height/2);
            let imageData = context.getImageData(0, 0, width, height).data;
            return [].slice.call(imageData).filter(function(v) {
                return v != 0;
            })
        };
        return test(defaultValue).join("") !== test(value).join("");
    }
};