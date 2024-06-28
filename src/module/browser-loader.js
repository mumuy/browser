import _Safari from './browser/Safari.js';
import _Chrome from './browser/Chrome.js';
import _Edge from './browser/Edge.js';
import _IE from './browser/IE.js';
import _Firefox from './browser/Firefox.js';
import _Firefox_Focus from './browser/Firefox Focus.js';
import _Chromium from './browser/Chromium.js';
import _Opera from './browser/Opera.js';
import _Opera_GX from './browser/Opera GX.js';
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
import _HONOR from './browser/HONOR.js';
import _Huawei from './browser/Huawei.js';
import _OPPO from './browser/OPPO.js';
import _Vivo from './browser/Vivo.js';
import _Xiaomi from './browser/Xiaomi.js';
import _Meizu from './browser/Meizu.js';
import _Samsung from './browser/Samsung.js';
import _360 from './browser/360.js';
import _360SE from './browser/360SE.js';
import _360SEAI from './browser/360SEAI.js';
import _360EE from './browser/360EE.js';
import _360EEAI from './browser/360EEAI.js';
import _360CSE from './browser/360CSE.js';
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
import _Lenovo from './browser/Lenovo.js';
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

import wrapperPromise from './method/wrapperPromise.js';

export default function(_,isAsync = false){
    let ua = _.userAgent;
    let browserList = [_Safari, _Chrome, _Edge, _IE, _Firefox, _Firefox_Focus, _Chromium, _Opera, _Opera_GX, _Vivaldi, _Yandex, _Brave, _Arora, _Lunascape, _QupZilla, _Coc_Coc, _Kindle, _Iceweasel, _Konqueror, _Iceape, _SeaMonkey, _Epiphany, _Huawei, _OPPO, _Vivo, _Xiaomi, _Meizu, _Samsung, _360, _360EE, _360SE, _360SEAI, _360EEAI, _360CSE, _UC, _QQBrowser, _QQ, _Baidu, _Maxthon, _Sogou, _Liebao, _2345Explorer, _115Browser, _TheWorld, _Quark, _Qiyu, _Lenovo, _Wechat, _WechatWork, _Taobao, _Alipay, _Weibo, _Douban, _Suning, _iQIYI, _DingTalk, _Douyin, _Googlebot, _Baiduspider, _Sogouspider, _Bingbot, _360Spider, _Bytespider, _YisouSpider, _YodaoBot, _YandexBot];
    

    _.browser = '';
    _.browserVersion = '';

    browserList.forEach(function(item){
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

    if(isAsync){
        let all_promise = wrapperPromise(browserList.map(item=>item.match(ua)));
        _.browser = Promise.all(all_promise).then(function(list){
            let browser = '';
            list.forEach(function(isMatch,index){
                if(isMatch){
                    browser = browserList[index].name;
                }
            });
            // 修正
            if(browser == 'Chrome'&&ua.match(/\S+Browser/)){
                browser = ua.match(/\S+Browser/)[0];
            }
            return browser;
        });
        _.browserVersion = Promise.all(all_promise).then(function(list){
            let browser = '';
            let version = '';
            list.forEach(function(isMatch,index){
                if(isMatch){
                    browser = browserList[index].name;
                    version =  browserList[index].version(ua);
                }
            });
            // 修正
            if(browser == 'Chrome'&&ua.match(/\S+Browser/)){
                version = ua.replace(/^.*Browser\/([\d.]+).*$/)?.[1]||'';
            }
            return version;
        });     
    }
};
