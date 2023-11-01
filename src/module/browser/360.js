import mime from '../method/mime';

export default {
    name:'360',
    match(ua){
        let isMatch = false;
        if(self?.chrome){
            let chrome_version = ua.replace(/^.*Chrome\/([\d]+).*$/, '$1');
            if(mime("type", "application/360softmgrplugin")||mime("type", "application/mozilla-npqihooquicklogin")){
                isMatch = true;
            }else if(chrome_version>36&&self?.showModalDialog){
                isMatch = true;
            }else if(chrome_version>45){
                isMatch = mime("type", "application/vnd.chromium.remoting-viewer");
                if(!isMatch&&chrome_version>=69){
                    isMatch = mime("type", "application/hwepass2001.installepass2001")||mime("type", "application/asx");
                }
            }
        }
        return ua.indexOf('QihooBrowser') > -1||ua.indexOf('QHBrowser') > -1 || isMatch;
    },
    version(ua){
        return ua.match(/QihooBrowser(HD)?\/([\d.]+)/)?.[1]||'';
    }
};
