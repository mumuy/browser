import globalThis from './runtime/globalThis.js';

async function getScreenFPS(){
    return new Promise(function(resolve){
        let lastTime = 0;
        let count = 1;
        let list = [];
        let tick = function(timestamp){
            if(lastTime>0){
                if(count<12){   // 取12个间隙，去除最高最低后算平均值
                    list.push(timestamp-lastTime);
                    lastTime = timestamp;
                    count++;
                    requestAnimationFrame(tick);
                }else{
                    list.sort();
                    list = list.slice(1,11);
                    let sum = list.reduce((a,b)=>a+b);;
                    const fps = Math.round(10000/sum/10)*10;
                    resolve(fps);
                }
            }else{
                lastTime = timestamp;
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    });
}

export default {
    name:'screen',
    parse(){
        return {};
    },
    async getInfo(){
        // 屏幕尺寸
        const screenWidth = globalThis?.screen?.width||0;
        const screenHeight = globalThis?.screen?.height||0;
        const clientWidth = globalThis?.document?.documentElement?.clientWidth||globalThis?.document?.body?.clientWidth||0;
        const clientHeight = globalThis?.document?.documentElement?.clientHeight||globalThis?.document?.body?.clientHeight||0;
        // 屏幕刷新率
        const screenFPS = await getScreenFPS();
        const screenColorDepth = globalThis?.screen.colorDepth;
        const screenPixelDepth = globalThis?.screen.pixelDepth;
        // 其他信息
        const screenOrientation = screen.orientation?.type || '未知';
        const isTouch = globalThis?.navigator?.maxTouchPoints>0||false;

        return {
            screenWidth,
            screenHeight,
            clientWidth,
            clientHeight,
            screenFPS,
            screenColorDepth,
            screenPixelDepth,
            screenOrientation,
            isTouch,
        };
    }
}