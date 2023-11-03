import _Safari from './browser/Safari';
import _Chrome from './browser/Chrome';
import _Edge from './browser/Edge';
import _IE from './browser/IE';
import _Firefox from './browser/Firefox';
import _Firefox_Focus from './browser/Firefox Focus';
import _Chromium from './browser/Chromium';
import _Opera from './browser/Opera';
import _Vivaldi from './browser/Vivaldi';
import _Yandex from './browser/Yandex';
import _Brave from './browser/Brave';
import _Arora from './browser/Arora';
import _Lunascape from './browser/Lunascape';
import _QupZilla from './browser/QupZilla';
import _Coc_Coc from './browser/Coc Coc';
import _Kindle from './browser/Kindle';
import _Iceweasel from './browser/Iceweasel';
import _Konqueror from './browser/Konqueror';
import _Iceape from './browser/Iceape';
import _SeaMonkey from './browser/SeaMonkey';
import _Epiphany from './browser/Epiphany';
import _Huawei from './browser/Huawei';
import _OPPO from './browser/OPPO';
import _Vivo from './browser/Vivo';
import _Xiaomi from './browser/Xiaomi';
import _Meizu from './browser/Meizu';
import _Samsung from './browser/Samsung';
import _360 from './browser/360';
import _360SE from './browser/360SE';
import _360EE from './browser/360EE';
import _UC from './browser/UC';
import _QQBrowser from './browser/QQBrowser';
import _QQ from './browser/QQ';
import _Baidu from './browser/Baidu';
import _Maxthon from './browser/Maxthon';
import _Sogou from './browser/Sogou';
import _Liebao from './browser/Liebao';
import _2345Explorer from './browser/2345Explorer';
import _115Browser from './browser/115Browser';
import _TheWorld from './browser/TheWorld';
import _Quark from './browser/Quark';
import _Qiyu from './browser/Qiyu';
import _Wechat from './browser/Wechat';
import _WechatWork from './browser/WechatWork';
import _Taobao from './browser/Taobao';
import _Alipay from './browser/Alipay';
import _Weibo from './browser/Weibo';
import _Douban from './browser/Douban';
import _Suning from './browser/Suning';
import _iQIYI from './browser/iQIYI';
import _DingTalk from './browser/DingTalk';
import _Douyin from './browser/Douyin';
import _Googlebot from './browser/Googlebot';
import _Baiduspider from './browser/Baiduspider';
import _Sogouspider from './browser/Sogouspider';
import _Bingbot from './browser/Bingbot';
import _360Spider from './browser/360Spider';
import _Bytespider from './browser/Bytespider';
import _YisouSpider from './browser/YisouSpider';
import _YodaoBot from './browser/YodaoBot';
import _YandexBot from './browser/YandexBot';


export default function(_,ua){
    _.browser = '';
    _.browserVersion = '';
    [_Safari, _Chrome, _Edge, _IE, _Firefox, _Firefox_Focus, _Chromium, _Opera, _Vivaldi, _Yandex, _Brave, _Arora, _Lunascape, _QupZilla, _Coc_Coc, _Kindle, _Iceweasel, _Konqueror, _Iceape, _SeaMonkey, _Epiphany, _Huawei, _OPPO, _Vivo, _Xiaomi, _Meizu, _Samsung, _360, _360SE, _360EE, _UC, _QQBrowser, _QQ, _Baidu, _Maxthon, _Sogou, _Liebao, _2345Explorer, _115Browser, _TheWorld, _Quark, _Qiyu, _Wechat, _WechatWork, _Taobao, _Alipay, _Weibo, _Douban, _Suning, _iQIYI, _DingTalk, _Douyin, _Googlebot, _Baiduspider, _Sogouspider, _Bingbot, _360Spider, _Bytespider, _YisouSpider, _YodaoBot, _YandexBot].forEach(function(item){
        if(item.match(ua)){
            _.browser = item.name;
            _.browserVersion = item.version(ua);
        }
    });

    // 修正
    if(_.browser == 'Chrome'&&ua.match(/\S+Browser/)){
        _.browser = ua.match(/\S+Browser/)[0];
        _.browserVersion = ua.replace(/^.*Browser\/([\d.]+).*$/)?.[1]||'';
    }
};
