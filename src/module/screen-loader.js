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
        let screenWidth = globalThis?.screen?.width||0;
        let screenHeight = globalThis?.screen?.height||0;
        let clientWidth = globalThis?.document?.documentElement?.clientWidth||0;
        let clientHeight = globalThis?.document?.documentElement?.clientHeight||0;
        // 屏幕刷新率
        let screenFPS = await getScreenFPS();

        return {
            screenWidth,
            screenHeight,
            clientWidth,
            clientHeight,
            screenFPS
        };
    }
}