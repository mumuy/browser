import _Safari from './browser/Safari.js';
import _Chrome from './browser/Chrome.js';
import _Edge from './browser/Edge.js';
import _IE from './browser/IE.js';
import _Firefox from './browser/Firefox.js';
import _Firefox_Focus from './browser/Firefox Focus.js';
import _Chromium from './browser/Chromium.js';
import _Opera from './browser/Opera.js';
import _Vivaldi from './browser/Vivaldi.js';
import _Yandex from './browser/Yandex.js';
import _Brave from './browser/Brave.js';
import _Arora from './browser/Arora.js';
import _Lunascape from './browser/Lunascape.js';
import _QupZilla from './browser/QupZilla.js';
import _Coc_Coc from './browser/Coc Coc.js';
import _Kindle from './browser/Kindle.js';
import _Iceweasel from './browser/Iceweasel.js';
import _Konqueror from './browser/Konqueror.js';
import _Iceape from './browser/Iceape.js';
import _SeaMonkey from './browser/SeaMonkey.js';
import _Epiphany from './browser/Epiphany.js';
import _Huawei from './browser/Huawei.js';
import _OPPO from './browser/OPPO.js';
import _Vivo from './browser/Vivo.js';
import _Xiaomi from './browser/Xiaomi.js';
import _Meizu from './browser/Meizu.js';
import _Samsung from './browser/Samsung.js';
import _360 from './browser/360.js';
import _360SE from './browser/360SE.js';
import _360EE from './browser/360EE.js';
import _UC from './browser/UC.js';
import _QQBrowser from './browser/QQBrowser.js';
import _QQ from './browser/QQ.js';
import _Baidu from './browser/Baidu.js';
import _Maxthon from './browser/Maxthon.js';
import _Sogou from './browser/Sogou.js';
import _Liebao from './browser/Liebao.js';
import _2345Explorer from './browser/2345Explorer.js';
import _115Browser from './browser/115Browser.js';
import _TheWorld from './browser/TheWorld.js';
import _Quark from './browser/Quark.js';
import _Qiyu from './browser/Qiyu.js';
import _Wechat from './browser/Wechat.js';
import _WechatWork from './browser/WechatWork.js';
import _Taobao from './browser/Taobao.js';
import _Alipay from './browser/Alipay.js';
import _Weibo from './browser/Weibo.js';
import _Douban from './browser/Douban.js';
import _Suning from './browser/Suning.js';
import _iQIYI from './browser/iQIYI.js';
import _DingTalk from './browser/DingTalk.js';
import _Douyin from './browser/Douyin.js';
import _Googlebot from './browser/Googlebot.js';
import _Baiduspider from './browser/Baiduspider.js';
import _Sogouspider from './browser/Sogouspider.js';
import _Bingbot from './browser/Bingbot.js';
import _360Spider from './browser/360Spider.js';
import _Bytespider from './browser/Bytespider.js';
import _YisouSpider from './browser/YisouSpider.js';
import _YodaoBot from './browser/YodaoBot.js';
import _YandexBot from './browser/YandexBot.js';


export default function(_,isAsync){
    let ua = _.userAgent;
    _.browser = '';
    _.browserVersion = '';

    [_Safari, _Chrome, _Edge, _IE, _Firefox, _Firefox_Focus, _Chromium, _Opera, _Vivaldi, _Yandex, _Brave, _Arora, _Lunascape, _QupZilla, _Coc_Coc, _Kindle, _Iceweasel, _Konqueror, _Iceape, _SeaMonkey, _Epiphany, _Huawei, _OPPO, _Vivo, _Xiaomi, _Meizu, _Samsung, _360, _360EE, _360SE, _UC, _QQBrowser, _QQ, _Baidu, _Maxthon, _Sogou, _Liebao, _2345Explorer, _115Browser, _TheWorld, _Quark, _Qiyu, _Wechat, _WechatWork, _Taobao, _Alipay, _Weibo, _Douban, _Suning, _iQIYI, _DingTalk, _Douyin, _Googlebot, _Baiduspider, _Sogouspider, _Bingbot, _360Spider, _Bytespider, _YisouSpider, _YodaoBot, _YandexBot].forEach(function(item){
        if(item.match(ua)){
            _.browser = item.name;
            _.browserVersion = item.version(ua,isAsync);
        }
    });

    // 修正
    if(_.browser == 'Chrome'&&ua.match(/\S+Browser/)){
        _.browser = ua.match(/\S+Browser/)[0];
        _.browserVersion = ua.replace(/^.*Browser\/([\d.]+).*$/)?.[1]||'';
    }
};
