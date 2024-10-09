import getMD5 from '../utils/getMD5.js';

export default {
    name:'audio',
    async getInfo(){
        return new Promise(function(resolve,reject){
            let OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            let context = new OfflineAudioContext(1,44100,44100);
            let oscillator = context.createOscillator();
            oscillator.type = "triangle";
            oscillator.frequency.setValueAtTime(1e4, context.currentTime);
            let compressor = context.createDynamicsCompressor();
            [
                ["threshold", -50],
                ["knee", 40],
                ["ratio", 12],
                ["reduction", -20],
                ["attack", 0],
                ["release", .25]
            ].forEach(function(item) {
                if(compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime == "function"){
                    compressor[item[0]].setValueAtTime(item[1], context.currentTime);
                }
            });
            oscillator.connect(compressor);
            compressor.connect(context.destination);
            oscillator.start(0);
            context.startRendering();
            let hander = setTimeout(function(){
                context.oncomplete = function(){};
                context = null,
                resolve(getMD5('audio Timeout'));
            }, 1000);
            context.oncomplete = function(data) {
                hander&&clearTimeout(hander);
                let result = data.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(n, t) {
                    return n + Math.abs(t)
                }, 0).toString();
                oscillator.disconnect();
                compressor.disconnect();
                resolve(getMD5(result));
            }
        });
    }
};