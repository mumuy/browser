
export default function(_,ua){
    // 类型判断
    _.isWebview = ua.indexOf('; wv)')>-1;
    _.isBot = ['Googlebot', 'Baiduspider', 'Sogouspider', 'Bingbot', '360Spider', 'Bytespider', 'YandexBot'].includes(_.browser);
};