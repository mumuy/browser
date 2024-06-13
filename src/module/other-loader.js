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
    _.screenWidth = window.screen.width;
    _.screenHeight = window.screen.height;
    _.clientWidth = window.document.documentElement.clientWidth;
    _.clientHeighth = window.document.documentElement.clientHeight;
};
