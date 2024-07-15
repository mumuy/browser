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
        let count = 0;
        let tick = function(timestamp){
            if(lastTime>0){
                if(count<10){   // 算10次平均防止偶尔一次差距太大
                    count++;
                    requestAnimationFrame(tick);
                }else{
                    const fps = Math.round(10000/(timestamp-lastTime)/30)*30;
                    resolve(fps);
                }
            }else{
                lastTime = timestamp;
                requestAnimationFrame(tick);
            }
        };
        requestAnimationFrame(tick);
    })
};
