import _globalThis from './runtime/globalThis.js';

import getPublicIP from './method/getPublicIP.js';

export default function(_){
    // 类型判断
    _.isWebview = _.userAgent.includes('; wv)');
    _.isRobot = ['Googlebot', 'Baiduspider', 'Sogouspider', 'Bingbot', '360Spider', 'Bytespider', 'YandexBot'].includes(_.browser);
    // IP地址
    _.ip = getPublicIP();
    _.timezone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
    // 屏幕尺寸
    _.screenWidth = _globalThis?.screen?.width||0;
    _.screenHeight = _globalThis?.screen?.height||0;
    _.clientWidth = _globalThis?.document?.documentElement?.clientWidth||0;
    _.clientHeighth = _globalThis?.document?.documentElement?.clientHeight||0;
    // 屏幕刷新率
    _.screenFPS = new Promise(function(resolve){
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
};
