
export default function(_){
    // 类型判断
    _.isWebview = _.userAgent.indexOf('; wv)')>-1;
    _.isRobot = ['Googlebot', 'Baiduspider', 'Sogouspider', 'Bingbot', '360Spider', 'Bytespider', 'YandexBot'].includes(_.browser);
};