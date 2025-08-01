#### 项目演示(Demo)
【项目主页】[https://passer-by.com/browser/](https://passer-by.com/browser/)

#### 应用案例(Sample)
【BrowserIs.com】[https://browseris.com/](https://browseris.com/)

#### 下载 & 安装

该 Javascript 库 / 模块可以用于前端也可以用于后端 Nodejs 中。

1. 直接下载browser.js，然后使用 `<script>`标签引入，可以得到全局函数 `browser`.
2. 使用 npm 进行包管理，具体为：

    > **npm install browser-tool**

然后使用 `require` 引入模块

```js
var browser = require("browser-tool");

// 解析User-Agent
let info = browser.parse('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0');

// 获取浏览器详细信息 - 指定字段：'browser','system','device','gpu','network','battery','screen','language','timezone'
let networkInfo = await browser.getInfo(['network']);

// 获取浏览器详细信息 - 全部字段
let info = await browser.getInfo();
```
#### 返回
```js
{
    "browser": "Chrome",                // 浏览器名称
    "browserVersion": "118.0.0.0",      // 浏览器版本
    "engine": "Blink",                  // 浏览器渲染引擎
    "system": "Windows",                // 操作系统名称
    "systemVersion": '10',              // 操作系统版本
    "platform": "Win32",                // 系统平台
    "screenFPS":60,                     // 屏幕刷新率
    "screenWidth":1920,                 // 屏幕宽度
    "screenHeight":800,                 // 屏幕高度
    "screenOrientation":'landscape-primary',    // 浏览器屏幕方向
    "clientWidth":1920,                 // 浏览器可视区域宽度
    "clientHeight":640,                 // 浏览器可视区域高度
    "device": "PC",                     // 设备类型
    "devicePixelRatio":1,               // 设备分辨率比
    "deviceMemory":8,                   // 设备大致内存大小
    "architecture": "x86",              // 芯片架构
    "bitness": 64,                      // CPU架构位数
    "gpu": "Google",                    // GPU厂商
    "gpuModel": "Vulkan 1.3.0",         // GPU型号
    "ip":'8.8.8.8',                     // IP地址
    "language": "zh_CN",                // 所用语言
    "network": "wifi",                  // 网络类型
    "timezone":'Asia/Shanghai',         // 所处时区
    "isWebview": false,                 // 是否Webview(仅Android有效)
    "isBot": false,                     // 是否搜索引擎蜘蛛程序
    "isTouch": false,                   // 是否为触屏
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/119.0.0.0 Safari/537.36"
}
```

#### 浏览器支持情况
```js
// 判断浏览器是否支持某种字体
let hasYaHei = browser.isSupport('font-family','Microsoft YaHei');

// 判断浏览器是否支持WebGL
let isWebGL = browser.isSupport('webgl');
```

#### 获取浏览器指纹
```js
// 浏览器各项综合特征指纹
let data = await browser.getFingerprint();
console.log('[浏览器指纹]',data.value);
```

<table>
    <caption><h3>browser - 浏览器</h3></caption>
    <thead>
        <tr><th>名称</th><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="21">国外浏览器</td><td>Chrome</td><td>谷歌浏览器</td></tr>
        <tr><td>Chromium</td><td>谷歌浏览器开源版</td></tr>
        <tr><td>IE</td><td>微软IE浏览器</td></tr>
        <tr><td>Edge</td><td>微软新一代浏览器</td></tr>
        <tr><td>Firefox</td><td>火狐浏览器</td></tr>
        <tr><td>Safari</td><td>苹果系统默认浏览器</td></tr>
        <tr><td>Opera</td><td>Opera浏览器</td></tr>
        <tr><td>Opera GX</td><td>Opera GX浏览器</td></tr>
        <tr><td>Vivaldi</td><td>Opera联合创始人发布</td></tr>
        <tr><td>Yandex</td><td>俄罗斯最大搜索引擎Yandex出品</td></tr>
        <tr><td>Brave</td><td>自带网络广告拦截的浏览器</td></tr>
        <tr><td>Arora</td><td>基于webkit和Qt的轻量级浏览器</td></tr>
        <tr><td>Lunascape</td><td>来自日本的三引擎浏览器</td></tr>
        <tr><td>QupZilla</td><td>轻量级跨平台浏览器</td></tr>
        <tr><td>Coc Coc</td><td>越南搜索引擎浏览器</td></tr>
        <tr><td>Kindle</td><td>亚马逊电子书</td></tr>
        <tr><td>Iceweasel</td><td>Firefox浏览器的Debian再发布版</td></tr>
        <tr><td>Konqueror</td><td>开源Web浏览器和文件管理器</td></tr>
        <tr><td>SeaMonkey</td><td>丰年虾浏览器，Mozilla基金会建构</td></tr>
        <tr><td>Epiphany</td><td>GNOME 桌面下的主力浏览器</td></tr>
        <tr><td>Whate</td><td>韩国互联网公司Naver推出浏览器</td></tr>
        <tr><td rowspan="16">国内浏览器</td><td>360</td><td>360浏览器(手机版)</td></tr>
        <tr><td>360SE</td><td>360安全浏览器</td></tr>
        <tr><td>360EE</td><td>360极速浏览器</td></tr>
        <tr><td>360AI</td><td>360AI浏览器</td></tr>
        <tr><td>360ENT</td><td>360企业安全浏览器</td></tr>
        <tr><td>UC</td><td>UC浏览器</td></tr>
        <tr><td>QQBrowser</td><td>QQ浏览器</td></tr>
        <tr><td>Baidu</td><td>百度浏览器</td></tr>
        <tr><td>Maxthon</td><td>傲游浏览器</td></tr>
        <tr><td>Sogou</td><td>搜狗浏览器</td></tr>
        <tr><td>Liebao</td><td>猎豹浏览器</td></tr>
        <tr><td>2345Browser</td><td>2345浏览器</td></tr>
        <tr><td>115Browser</td><td>115浏览器</td></tr>
        <tr><td>TheWorld</td><td>世界之窗浏览器</td></tr>
        <tr><td>Qiyu</td><td>旗鱼浏览器</td></tr>
        <tr><td>Quark</td><td>夸克浏览器</td></tr>
        <tr><td rowspan="9">手机厂商</td><td>Huawei</td><td>华为浏览器</td></tr>
        <tr><td>HONOR</td><td>荣耀浏览器</td></tr>
        <tr><td>OPPO</td><td>OPPO浏览器</td></tr>
        <tr><td>Vivo</td><td>Vivo浏览器</td></tr>
        <tr><td>Xiaomi</td><td>小米浏览器</td></tr>
        <tr><td>Meizu</td><td>魅族浏览器</td></tr>
        <tr><td>OnePlus</td><td>一加浏览器</td></tr>
        <tr><td>Samsung</td><td>三星浏览器</td></tr>
        <tr><td>Lenovo</td><td>联想浏览器</td></tr>
        <tr><td rowspan="15">客户端</td><td>QQ</td><td>QQ客户端</td></tr>
        <tr><td>Wechat</td><td>微信手机客户端</td></tr>
        <tr><td>WechatWork</td><td>企业微信客户端</td></tr>
        <tr><td>Taobao</td><td>淘宝手机客户端</td></tr>
        <tr><td>Alipay</td><td>支付宝手机客户端</td></tr>
        <tr><td>Weibo</td><td>微博手机客户端</td></tr>
        <tr><td>Douban</td><td>豆瓣手机客户端</td></tr>
        <tr><td>Suning</td><td>苏宁易购手机客户端</td></tr>
        <tr><td>iQIYI</td><td>爱奇艺手机客户端</td></tr>
        <tr><td>DingTalk</td><td>钉钉手机客户端</td></tr>
        <tr><td>Douyin</td><td>抖音客户端</td></tr>
        <tr><td>Toutiao</td><td>头条客户端</td></tr>
        <tr><td>Facebook</td><td>Facebook客户端</td></tr>
        <tr><td>Whatsapp</td><td>Whatsapp客户端</td></tr>
        <tr><td>Line</td><td>Line客户端</td></tr>
        <tr><td rowspan="13">爬虫</td><td>Googlebot</td><td>谷歌爬虫</td></tr>
        <tr><td>Baiduspider</td><td>百度爬虫</td></tr>
        <tr><td>Sogouspider</td><td>搜狗爬虫</td></tr>
        <tr><td>Bingbot</td><td>必应爬虫</td></tr>
        <tr><td>360Spider</td><td>360爬虫</td></tr>
        <tr><td>Bytespider</td><td>今日头条爬虫</td></tr>
        <tr><td>YisouSpider</td><td>神马搜索爬虫</td></tr>
        <tr><td>YodaoBot</td><td>有道搜索爬虫</td></tr>
        <tr><td>YandexBot</td><td>Yandex搜索引擎爬虫</td></tr>
        <tr><td>Yahoo</td><td>Yahoo蜘蛛</td></tr>
        <tr><td>TelegramBot</td><td>Telegram蜘蛛</td></tr>
        <tr><td>Twitterbot</td><td>Twitter蜘蛛</td></tr>
        <tr><td>Headless</td><td>谷歌无头浏览器</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>engine - 内核</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>EdgeHTML</td><td>Edge浏览器内置引擎</td></tr>
        <tr><td>Trident</td><td>IE浏览器内置引擎</td></tr>
        <tr><td>Presto</td><td>Opera浏览器内置引擎</td></tr>
        <tr><td>WebKit</td><td>开源浏览器引擎</td></tr>
        <tr><td>Blink</td><td>Google基于WebKit开发引擎</td></tr>
        <tr><td>Gecko</td><td>Mozilla内置引擎</td></tr>
        <tr><td>Servo</td><td>Mozilla使用Rust开发的实验性浏览器引擎</td></tr>
        <tr><td>KHTML</td><td>KDE网页排版引擎</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>system - 操作系统</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Windows</td><td>微软电脑操作系统</td></tr>
        <tr><td>Linux</td><td>开源操作系统</td></tr>
        <tr><td>Ubuntu</td><td>Linux发行版之一</td></tr>
        <tr><td>FreeBSD</td><td>Linux发行版之一</td></tr>
        <tr><td>Debian</td><td>Linux发行版之一</td></tr>
        <tr><td>Deepin</td><td>深度系统</td></tr>
        <tr><td>macOS</td><td>苹果电脑操作系统</td></tr>
        <tr><td>Android</td><td>谷歌开源移动端操作系统</td></tr>
        <tr><td>iOS</td><td>苹果手机操作系统</td></tr>
        <tr><td>Windows Phone</td><td>微软操作系统</td></tr>
        <tr><td>BlackBerry</td><td>黑莓操作系统</td></tr>
        <tr><td>MeeGo</td><td>诺基亚与英特尔开源操作系统</td></tr>
        <tr><td>Symbian</td><td>诺基亚操作系统</td></tr>
        <tr><td>Chrome OS</td><td>谷歌开源电脑操作系统</td></tr>
        <tr><td>WebOS</td><td>Palm公司操作系统</td></tr>
        <tr><td>HarmonyOS</td><td>华为操作系统</td></tr>
        <tr><td>UOS</td><td>统信UOS操作系统</td></tr>
        <tr><td>CentOS</td><td>CentOS操作系统</td></tr>
        <tr><td>Fedora</td><td>Fedora操作系统</td></tr>
        <tr><td>Gentoo</td><td>Gentoo操作系统</td></tr>
        <tr><td>Red Hat</td><td>Red Hat操作系统</td></tr>
        <tr><td>SUSE</td><td>SUSE操作系统</td></tr>
        <tr><td>Slackware</td><td>Slackware操作系统</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>device - 设备类型</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Desktop</td><td>电脑</td></tr>
        <tr><td>Tablet</td><td>平板或PDA</td></tr>
        <tr><td>Mobile</td><td>手机</td></tr>
    </tbody>
</table>

<table>
    <caption><h3>platform - 硬件平台</h3></caption>
    <thead>
        <tr><th>值</th><th>描述</th></tr>
    </thead>
    <tbody>
        <tr><td>Win32</td><td>Windows 32位</td></tr>
        <tr><td>Win64</td><td>Windows 64位</td></tr>
        <tr><td>WinCE</td><td>Windows CE</td></tr>
        <tr><td>iPhone</td><td>苹果手机</td></tr>
        <tr><td>iPod</td><td>苹果音乐播放器</td></tr>
        <tr><td>iPad</td><td>苹果平板</td></tr>
        <tr><td>Android</td><td>安卓系统</td></tr>
        <tr><td colspan="2">...</td></tr>
    </tbody>
</table>
