export default function(_,ua){
    // 类型判断
    _.isWebview = ua.indexOf('; wv)')>-1;
    _.isBot = ['Googlebot', 'Baiduspider', 'Sogouspider', 'Bingbot', '360Spider', 'Bytespider', 'YandexBot'].includes(_.browser);
    //修正
    if(_.browser == 'Chrome'&&ua.match(/\S+Browser/)){
        _.browser = ua.match(/\S+Browser/)[0];
        _.version = ua.replace(/^.*Browser\/([\d.]+).*$/)?.[1]||'';
    }
    if (_.browser == 'Edge') {
        _.engine = parseInt(_.version)>75?'Blink':'EdgeHTML';
    } else if (_Chrome.match(ua)&& _.engine=='WebKit' && parseInt(_Chrome.version(ua)) > 27) {
        _.engine = 'Blink';
    } else if (_.browser == 'Opera' && parseInt(_.version) > 12) {
        _.engine = 'Blink';
    } else if (_.browser == 'Yandex') {
        _.engine = 'Blink';
    }
};