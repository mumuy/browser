//浏览器信息
var Browser = function(userAgent){
	var u = userAgent||navigator.userAgent;
	var _this = this;
	var match = {
		//内核
		'Trident': u.indexOf('Trident')>0||u.indexOf('NET CLR')>0,
		'Presto': u.indexOf('Presto')>0,
        'WebKit': u.indexOf('AppleWebKit')>0,
        'Gecko': u.indexOf('Gecko/')>0,
		//浏览器
		'Safari': u.indexOf('Safari')>0,
		'Chrome':u.indexOf('Chrome')>0||u.indexOf('CriOS')>0,
		'IE': u.indexOf('MSIE')>0||u.indexOf('Trident')>0,
		'Edge': u.indexOf('Edge')>0,
		'Firefox': u.indexOf('Firefox')>0,
		'Opera': u.indexOf('Opera')>0||u.indexOf('OPR')>0,
		'Vivaldi': u.indexOf('Vivaldi')>0,
		'Yandex': u.indexOf('YaBrowser')>0,
		'Kindle': u.indexOf('Kindle')>0||u.indexOf('Silk/')>0,
		'UC': u.indexOf('UC')>0||u.indexOf(' UBrowser')>0,
		'QQBrowser': u.indexOf('QQBrowser')>0,
		'QQ': u.indexOf('QQ/')>0,
		'Baidu': u.indexOf('Baidu')>0||u.indexOf('BIDUBrowser')>0,
		'Maxthon': u.indexOf('Maxthon')>0,
		'Sogou': u.indexOf('MetaSr')>0||u.indexOf('Sogou')>0,
		'LBBROWSER': u.indexOf('LBBROWSER')>0,
		'2345Explorer': u.indexOf('2345Explorer')>0,
		'TheWorld': u.indexOf('TheWorld')>0,
		'XiaoMi':u.indexOf('MiuiBrowser')>0,
		'Qiyu': u.indexOf('Qiyu')>0,
		'Wechat':u.indexOf('MicroMessenger')>0,
		'Taobao':u.indexOf('AliApp(TB')>0,
		'Alipay':u.indexOf('AliApp(AP')>0,
		'Weibo':u.indexOf('Weibo')>0,
		'Suning':u.indexOf('SNEBUY-APP')>0,
		'iQiYi':u.indexOf('IqiyiApp')>0,
		//系统或平台
		'Windows':u.indexOf('Windows')>0,
		'Linux':u.indexOf('Linux')>0,
		'Mac OS':u.indexOf('Macintosh')>0,
		'Android':u.indexOf('Android')>0||u.indexOf('Adr')>0,
		'WP':u.indexOf('IEMobile')>0,
		'BlackBerry':u.indexOf('BlackBerry')>0||u.indexOf('RIM')>0||u.indexOf('BB')>0,
		'MeeGo':u.indexOf('MeeGo')>0,
		'Symbian':u.indexOf('Symbian')>0,
		'iOS':u.indexOf('like Mac OS X')>0,
		'Chrome OS':u.indexOf('CrOS')>0,
		//设备
		'Mobile':u.indexOf('Mobi')>0||u.indexOf('iPh')>0||u.indexOf('480')>0,
		'Tablet':u.indexOf('Tablet')>0||u.indexOf('iPad')>0||u.indexOf('Nexus 7')>0
	};
	//修正
	if(match.Mobile){
		match.Mobile = !(u.indexOf('iPad')>0);
	}
	//基本信息
	var hash = {
		engine:['WebKit','Trident','Gecko','Presto'],
		browser:['Safari','Chrome','Edge','IE','Firefox','Opera','Vivaldi','Yandex','Kindle','UC','QQBrowser','QQ','Baidu','Maxthon','Sogou','LBBROWSER','2345Explorer','TheWorld','XiaoMi','Qiyu','Wechat','Taobao','Alipay','Weibo','Suning','iQiYi'],
		os:['Windows','Linux','Mac OS','Android','iOS','WP','BlackBerry','MeeGo','Symbian','Chrome OS'],
		device:['Mobile','Tablet']
	};
	_this.device = 'PC';
	_this.language = (function(){
		var g = (navigator.browserLanguage || navigator.language);
		var arr = g.split('-');
		if(arr[1]){
			arr[1] = arr[1].toUpperCase();
		}
		return arr.join('-');
	})();
	for(var s in hash){
		for(var i=0;i< hash[s].length;i++){
			var value = hash[s][i];
			if(match[value]){
				_this[s] = value;
			}
		}
	}
	//系统版本信息
	var osVersion = {
		'Windows':function(){
			var v = u.replace(/^.*Windows NT ([\d.]+);.*$/,'$1');
			var hash = {
				'6.4':'10',
				'6.3':'8.1',
				'6.2':'8',
				'6.1':'7',
				'6.0':'Vista',
				'5.2':'XP',
				'5.1':'XP',
				'5.0':'2000'
			};
			return hash[v]||v;
		},
		'Android':function(){
			return u.replace(/^.*Android ([\d.]+);.*$/,'$1');
		},
		'iOS':function(){
			return u.replace(/^.*OS ([\d_]+) like.*$/,'$1').replace(/_/g,'.');
		},
		'Mac OS':function(){
			return u.replace(/^.*Mac OS X ([\d_]+).*$/,'$1').replace(/_/g,'.');
		}
	}
	_this.osVersion = '';
	if(osVersion[_this.os]){
		_this.osVersion = osVersion[_this.os]();
		if(_this.osVersion==u){
			_this.osVersion = '';
		}
	}
	//浏览器版本信息
	var version = {
		'Chrome':function(){
			return u.replace(/^.*Chrome\/([\d.]+).*$/,'$1');
		},
		'IE':function(){
			return u.replace(/^.*MSIE ([\d.]+).*$/,'$1').replace(/^.*rv:([\d.]+).*$/,'$1');
		},
		'Edge':function(){
			return u.replace(/^.*Edge\/([\d.]+).*$/,'$1');
		},
		'Firefox':function(){
			return u.replace(/^.*Firefox\/([\d.]+).*$/,'$1');
		},
		'Safari':function(){
			return u.replace(/^.*Version\/([\d.]+).*$/,'$1');
		},
		'Opera':function(){
			return u.replace(/^.*Opera\/([\d.]+).*$/,'$1').replace(/^.*OPR\/([\d.]+).*$/,'$1');
		},
		'Vivaldi':function(){
			return u.replace(/^.*Vivaldi\/([\d.]+).*$/,'$1');
		},
		'Yandex':function(){
			return u.replace(/^.*YaBrowser\/([\d.]+).*$/,'$1');
		},
		'Kindle':function(){
			return u.replace(/^.*Version\/([\d.]+).*$/,'$1');
		},
		'Maxthon':function(){
			return u.replace(/^.*Maxthon\/([\d.]+).*$/,'$1');
		},
		'QQBrowser':function(){
			return u.replace(/^.*QQBrowser\/([\d.]+).*$/,'$1');
		},
		'QQ':function(){
			return u.replace(/^.*QQ\/([\d.]+).*$/,'$1');
		},
		'Baidu':function(){
			return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,'$1');
		},
		'UC':function(){
			return u.replace(/^.*UC?Browser\/([\d.]+).*$/,'$1');
		},
		'2345Explorer':function(){
			return u.replace(/^.*2345Explorer\/([\d.]+).*$/,'$1');
		},
		'TheWorld':function(){
			return u.replace(/^.*TheWorld ([\d.]+).*$/,'$1');
		},
		'XiaoMi':function(){
			return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/,'$1');
		},
		'Qiyu':function(){
			return u.replace(/^.*Qiyu\/([\d.]+).*$/,'$1');
		},
		'Wechat':function(){
			return u.replace(/^.*MicroMessenger\/([\d.]+).*$/,'$1');
		},
		'Taobao':function(){
			return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/,'$1');
		},
		'Alipay':function(){
			return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/,'$1');
		},
		'Weibo':function(){
			return u.replace(/^.*weibo__([\d.]+).*$/,'$1');
		},
		'Suning':function(){
			return u.replace(/^.*SNEBUY-APP([\d.]+).*$/,'$1');
		},
		'iQiYi':function(){
			return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/,'$1');
		}
	};
	_this.version = '';
	if(version[_this.browser]){
		_this.version = version[_this.browser]();
		if(_this.version==u){
			_this.version = '';
		}
	}
	//修正
	if(_this.browser=='Edge'){
		_this.engine = 'EdgeHTML';
	}else if(_this.browser=='Chrome'&&parseInt(_this.version)>27){
		_this.engine = 'Blink';
	}else if(_this.browser=='Opera'&&parseInt(_this.version)>12){
		_this.engine = 'Blink';
	}else if(_this.browser=='Yandex'){
		_this.engine = 'Blink';
	}
};