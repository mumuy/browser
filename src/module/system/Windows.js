let windowsVersion = null;
if(self?.navigator?.userAgentData){
    self.navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then(function(ua){
        if (navigator.userAgentData.platform === "Windows") {
            const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
            if(majorPlatformVersion>=13){
                windowsVersion = 11;
            }else{
                windowsVersion = 10;
            }
        }
    });
}

export default {
    name:'Windows',
    match(ua){
        return ua.indexOf('Windows') > -1;
    },
    version(ua){
        let v = ua.match(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/)?.[1]||'';
        let hash = {
            '10.0':'10',
            '6.4':'10 Technical Preview',
            '6.3':'8.1',
            '6.2':'8',
            '6.1':'7',
            '6.0':'Vista',
            '5.2':'XP 64-bit',
            '5.1':'XP',
            '5.01':'2000 SP1',
            '5.0':'2000',
            '4.0':'NT',
            '4.90':'ME'
        };
        return windowsVersion|| hash[v] || v;
    }
};
