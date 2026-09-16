let fontList = [
    // Windows
    ['PMingLiU','新细明体'],
    ['MingLiU','细明体'],
    ['DFKai-SB','标楷体'],
    ['SimHei','黑体'],
    ['SimSun','宋体'],
    ['NSimSun','新宋体'],
    ['FangSong','仿宋'],
    ['KaiTi','楷体'],
    ['KaiTi_GB2312','楷体_GB2312'],
    ['FangSong_GB2312','仿宋_GB2312'],
    ['Microsoft YaHei','微软雅黑'],
    ['Microsoft JhengHei','微软正黑体'],
    // Mac OS
    ['STXihei','华文细黑'],
    ['STHeiti','华文黑体'],
    ['STKaiti','华文楷体'],
    ['STSong','华文宋体'],
    ['STFangsong','华文仿宋'],
    ['BiauKai','标楷体'],
    ['LiHei Pro Medium','丽黑 Pro'],
    ['LiSong Pro Light','丽宋 Pro'],
    ['Apple LiGothic Medium','苹果丽中黑'],
    ['Apple LiSung Light','苹果丽细宋'],
    ['PingFang SC','苹方 - 简'],
    ['PingFang TC','苹方 - 繁'],
    ['PingFang HK','苹方 - 港'],
    ['Xingkai SC','行楷'],
    ['Weibei SC','魏碑'],
    ['Yuanti SC','圆体'],
    ['Songti SC','宋体'],
    ['Hiragino Sans GB','冬青黑体'],
    ['Lantinghei SC','兰亭黑'],
    ['Hanzipen SC','飘飘体'],
    ['Wawati SC','娃娃体'],
    ['Yapi SC','雅痞'],
    // Office
    ['LiSu','隶书'],
    ['YouYuan','幼圆'],
    ['STXihei','华文细黑'],
    ['STKaiti','华文楷体'],
    ['STSong','华文宋体'],
    ['STZhongsong','华文中宋'],
    ['STFangsong','华文仿宋'],
    ['STCaiyun','华文彩云'],
    ['STHupo','华文琥珀'],
    ['STLiti','华文隶书'],
    ['STXingkai','华文行楷'],
    ['STXinwei','华文新魏'],
    ['FZShuTi','方正舒体'],
    ['FZYaoti','方正姚体'],
    // 开源字体
    ['Source Han Sans CN','思源黑体'],
    ['Source Han Serif CN','思源宋体'],
    ['Source Han Mono SC','思源等宽'],
    ['Gen Shin Gothic','思源真黑体'],
    ['LXGW WenKai','霞鹜文楷'],
    ['HarmonyOS Sans','鸿蒙字体'],
    ['Alibaba PuHuiTi 2.0','阿里巴巴普惠体 2'],
    ['Alibaba PuHuiTi 3.0','阿里巴巴普惠体 3'],
    ['Alimama FangYuanTi VF','阿里妈妈方圆体'],
    ['Alimama DongFangDaKai','阿里妈妈东方大楷'],
    ['Alimama DaoLiTi','阿里妈妈刀隶体'],
    ['Douyin Sans','抖音美好体'],
    ['OPPO Sans','OPPO Sans'],
];

let $module = document.querySelector('.mod-panel .bd');
let info = {
    "architecture": "",
    "bitness": "",
    "browser": "",
    "browserVersion": "",
    "device": "",
    "devicePixelRatio":"",
    "deviceMemory":"",
    "engine": "",
    "gpu": "",
    "gpuModel": "",
    "isWebview": "",
    "isBot": "",
    "isTouch": "",
    "ip": "",
    "language": "",
    "network": "",
    "platform": "",
    "screenWidth": "",
    "screenHeight": "",
    "screenFPS":"",
    "clientWidth": "",
    "clientHeight": "",
    "system":  "",
    "systemVersion":  "",
    "timezone": "",
    "userAgent": "",
};
let browserList = ['Chrome','Safari','Firefox','Edge','IE','Opera','360','360SE','360EE','360AI','QQBrowser','Sogou','Liebao','Maxthon','TheWorld','Quark','2345Browser','115Browser','UC','QQ','Wechat','Yandex','Vivaldi','Vivo','Meizu','Xiaomi','OPPO','OnePlus','Huawei','HONOR','Lenovo','Brave','Alipay','Taobao','Toutiao','Whale','Samsung','Waterfox'];
let systemList = ['Windows','Windows Phone','Linux','Android','macOS','iOS','HarmonyOS','FreeBSD','Debian','Ubuntu','UOS','BlackBerry','Chrome OS'];
const languageMap = {
    // 中文与大中华地区
    "zh-CN": "简体中文（中国大陆）",
    "zh-TW": "繁体中文（中国台湾）",
    "zh-HK": "繁体中文（中国香港）",
    "zh-SG": "简体中文（新加坡）",

    // 英语及主要英语国家
    "en-US": "英语（美国）",
    "en-GB": "英语（英国）",
    "en-CA": "英语（加拿大）",
    "en-AU": "英语（澳大利亚）",
    "en-NZ": "英语（新西兰）",
    "en-ZA": "英语（南非）",
    "en-IN": "英语（印度）",

    // 欧洲主要语言
    "de-DE": "德语（德国）",
    "de-AT": "德语（奥地利）",
    "de-CH": "德语（瑞士）",
    "fr-FR": "法语（法国）",
    "fr-CA": "法语（加拿大）",
    "fr-CH": "法语（瑞士）",
    "es-ES": "西班牙语（西班牙）",
    "es-MX": "西班牙语（墨西哥）",
    "es-AR": "西班牙语（阿根廷）",
    "pt-BR": "葡萄牙语（巴西）",
    "pt-PT": "葡萄牙语（葡萄牙）",
    "it-IT": "意大利语（意大利）",
    "ru-RU": "俄语（俄罗斯）",
    "nl-NL": "荷兰语（荷兰）",
    "nl-BE": "荷兰语（比利时）",
    "pl-PL": "波兰语（波兰）",
    "uk-UA": "乌克兰语（乌克兰）",
    "el-GR": "希腊语（希腊）",
    "sv-SE": "瑞典语（瑞典）",
    "fi-FI": "芬兰语（芬兰）",
    "da-DK": "丹麦语（丹麦）",
    "no-NO": "挪威语（挪威）",
    "cs-CZ": "捷克语（捷克）",
    "hu-HU": "匈牙利语（匈牙利）",
    "ro-RO": "罗马尼亚语（罗马尼亚）",

    // 亚洲主要语言
    "ja-JP": "日语（日本）",
    "ko-KR": "韩语（韩国）",
    "hi-IN": "印地语（印度）",
    "bn-BD": "孟加拉语（孟加拉国）",
    "id-ID": "印度尼西亚语（印尼）",
    "ms-MY": "马来语（马来西亚）",
    "vi-VN": "越南语（越南）",
    "th-TH": "泰语（泰国）",
    "fil-PH": "菲律宾语（菲律宾）",
    "kk-KZ": "哈萨克语（哈萨克斯坦）",

    // 中东及非洲主要语言
    "ar-SA": "阿拉伯语（沙特阿拉伯）",
    "ar-EG": "阿拉伯语（埃及）",
    "ar-AE": "阿拉伯语（阿联酋）",
    "he-IL": "希伯来语（以色列）",
    "fa-IR": "波斯语（伊朗）",
    "tr-TR": "土耳其语（土耳其）",
    "sw-KE": "斯瓦希里语（肯尼亚）",
    "am-ET": "阿姆哈拉语（埃塞俄比亚）",
    "zu-ZA": "祖鲁语（南非）"
};


let fontList_html = [];
fontList.forEach(function(item){
    if(browser.isSupport('font-family',item[0])){
        fontList_html.push(`<p style="font-family:${item[0]};">${item[1]}</p>`);
    }
});
let getTemplate = function(info){
    let system = info.system+' '+info.systemVersion;
    let systemMap = {
        'Windows XP':'Windows 7',
        'Windows XP 64-bit':'Windows 7',
        'Windows 7':'Windows 7',
        'Windows Vista':'Windows 7'
    };
    return `
    <div class="table-inner">
        <table>
            <tbody>
                <tr>
                    <td class="th">
                        <p class="title">用户代理</p>
                        <p class="subtitle">User-Agent</p>
                    </td>
                    <td>${info.userAgent}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">浏览器</p>
                        <p class="subtitle">Browser</p>
                    </td>
                    <td>
                        ${browserList.includes(info.browser)?`<img src="static/image/browser/${info.browser}.png" width="24" height="24"/>`:''}
                        <strong>${info.browser||'<img src="static/image/loading.gif" width="32" height="32"/>'}</strong>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">版本</p>
                        <p class="subtitle">Version</p>
                    </td>
                    <td><span>${info.browserVersion}</span></td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">渲染引擎</p>
                        <p class="subtitle">Engine</p>
                    </td>
                    <td>${info.engine}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">操作系统</p>
                        <p class="subtitle">System</p>
                    </td>
                    <td>
                        ${systemList.includes(info.system)?`<img src="static/image/system/${systemMap[system]||info.system}.png" width="24" height="24"/>`:''}
                        <span>${info.system} ${info.systemVersion} (${info.bitness}位)</span>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">系统平台</p>
                        <p class="subtitle">Platform</p>
                    </td>
                    <td>${info.platform}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">屏幕尺寸</p>
                        <p class="subtitle">Screen size</p>
                    </td>
                    <td><span>${info.screenWidth} x ${info.screenHeight}</span></td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">可用屏幕尺寸</p>
                        <p class="subtitle">Client size</p>
                    </td>
                    <td><span>${info.clientWidth} x ${info.clientHeight}</span></td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">屏幕刷新率</p>
                        <p class="subtitle">Screen FPS</p>
                    </td>
                    <td>
                        <span>${info.screenFPS}</span>
                        <span class="text-gray">FPS</span>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">屏幕颜色深度</p>
                        <p class="subtitle">Screen ColorDepth</p>
                    </td>
                    <td>
                        <span>${info.screenColorDepth?info.screenColorDepth+'-bit':''}</span>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">屏幕像素深度</p>
                        <p class="subtitle">Screen PixelDepth</p>
                    </td>
                    <td>
                        <span>${info.screenPixelDepth?info.screenPixelDepth+'-bit':''}</span>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">处理器架构</p>
                        <p class="subtitle">Architecture</p>
                    </td>
                    <td>${info.architecture}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">设备类型</p>
                        <p class="subtitle">Device type</p>
                    </td>
                    <td>${info.device}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">设备像素比</p>
                        <p class="subtitle">Device Pixel Ratio</p>
                    </td>
                    <td>${info.devicePixelRatio}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">设备内存</p>
                        <p class="subtitle">Device Memory</p>
                    </td>
                    <td>${info.deviceMemory}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">CPU逻辑核心数</p>
                        <p class="subtitle">CPU logical Cores</p>
                    </td>
                    <td>${info.cores}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">图形处理器厂家</p>
                        <p class="subtitle">GPU vendor</p>
                    </td>
                    <td>${info.gpu}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">图形处理器型号</p>
                        <p class="subtitle">GPU model</p>
                    </td>
                    <td>${info.gpuModel}</td>
                </tr>
                
                <tr>
                    <td class="th">
                        <p class="title">IP地址</p>
                        <p class="subtitle">IP address</p>
                    </td>
                    <td>${info.ip}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">语言</p>
                        <p class="subtitle">Language</p>
                    </td>
                    <td>${languageMap[info.language] || info.language}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">时区</p>
                        <p class="subtitle">Timezone</p>
                    </td>
                    <td>${info.timezone}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">网络类型</p>
                        <p class="subtitle">Network</p>
                    </td>
                    <td>${info.network}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否联网</p>
                        <p class="subtitle">is online</p>
                    </td>
                    <td>${info.isOnline?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">带宽</p>
                        <p class="subtitle">Bandwidth</p>
                    </td>
                    <td>${info.bandWidth} <span class="text-gray">Mbps</span></td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">剩余电量</p>
                        <p class="subtitle">Battery</p>
                    </td>
                    <td>${info.battery>=0?info.battery*100+'%':''}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否充电</p>
                        <p class="subtitle">is charging</p>
                    </td>
                    <td>${info.isCharging?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否蜘蛛</p>
                        <p class="subtitle">is robot</p>
                    </td>
                    <td>${info.isRobot?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否Webview</p>
                        <p class="subtitle">is webview</p>
                    </td>
                    <td>${info.isWebview?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否触屏</p>
                        <p class="subtitle">Is Touch Screen</p>
                    </td>
                    <td>${info.isTouch?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">Cookie是否可用</p>
                        <p class="subtitle">Cookie Enabled</p>
                    </td>
                    <td>${info.cookieEnabled?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否支持WebGL</p>
                        <p class="subtitle">Is Support WebGL</p>
                    </td>
                    <td>
                        <div>${browser.isSupport('webgl')?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</div>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">是否支持NFC</p>
                        <p class="subtitle">Is Support NFC</p>
                    </td>
                    <td>
                        <div>${browser.isSupport('nfc')?'<span class="text-green">是</span> <span class="text-green-light">(true)</span>':'<span class="text-red">否</span> <span class="text-red-light">(false)</span>'}</div>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">支持字体</p>
                        <p class="subtitle">Font Family</p>
                    </td>
                    <td>
                        <div>${fontList_html.join('')}</div>
                    </td>
                </tr>
                <tr>
                    <td class="th">
                        <p class="title">浏览器指纹</p>
                        <p class="subtitle">Browser Fingerprint</p>
                    </td>
                    <td>
                        <div id="fingerprint">-</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    `;
};
$module.innerHTML = getTemplate(info);

browser.getInfo().then(function(info){
    $module.innerHTML = getTemplate(info) + `
        <iframe style="display:none;" sandbox="allow-same-origin allow-scripts allow-modals allow-popups allow-top-navigation" src="./stat.html?browser=${info.browser}&ua=${info.userAgent}" width="" height=""></iframe>
    `;
    browser.getFingerprint().then(function(fingerprint){
        document.querySelector('#fingerprint').innerText = fingerprint.value;
    });
});