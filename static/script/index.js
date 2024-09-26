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
let browserList = ['Chrome','Safari','Firefox','Edge','IE','Opera','360','360SE','360EE','360AI','QQBrowser','Sogou','Liebao','Maxthon','TheWorld','Quark','2345Explorer','115Browser','UC','QQ','Wechat','Yandex','Vivaldi','Vivo','Meizu','Xiaomi','OPPO','OnePlus','Huawei','HONOR','Lenovo','Brave','Alipay','Taobao','Toutiao'];
let systemList = ['Windows','Windows Phone','Linux','Android','macOS','iOS','HarmonyOS','FreeBSD','Debian','Ubuntu','UOS','BlackBerry','Chrome OS'];

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
                    ${systemList.includes(info.system)?`<img src="static/image/system/${systemMap[system]??info.system}.png" width="24" height="24"/>`:''}
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
                    <p class="title">图形处理器</p>
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
                <td>${info.language}</td>
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
                <td>${info.isOnline?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
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
                <td>${info.isCharging?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">是否蜘蛛</p>
                    <p class="subtitle">is robot</p>
                </td>
                <td>${info.isRobot?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">是否Webview</p>
                    <p class="subtitle">is webview</p>
                </td>
                <td>${info.isWebview?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">是否触屏</p>
                    <p class="subtitle">Is Touch Screen</p>
                </td>
                <td>${info.isTouch?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">Cookie是否可用</p>
                    <p class="subtitle">Cookie Enabled</p>
                </td>
                <td>${info.cookieEnabled?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">是否支持WebGL</p>
                    <p class="subtitle">Is Support WebGL</p>
                </td>
                <td>
                    <div id="fontlist">${browser.isSupport('webgl')?'是 <span class="text-gray">(true)</span>':'否 <span class="text-gray">(false)</span>'}</div>
                </td>
            </tr>
            <tr>
                <td class="th">
                    <p class="title">支持字体</p>
                    <p class="subtitle">Font Family</p>
                </td>
                <td>
                    <div id="fontlist">${fontList_html.join('')}</div>
                </td>
            </tr>
        </tbody>
    </table>`;
};
$module.innerHTML = getTemplate(info);

browser.getInfo().then(function(info){
    console.log('[getInfo()]',info);
    $module.innerHTML = getTemplate(info) + `
        <iframe style="display:none;" src="https://passer-by.com/browser/stat.html?browser=${info.browser}&ua=${info.userAgent}" width="" height=""></iframe>
    `;
});