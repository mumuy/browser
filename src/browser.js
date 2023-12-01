import browserLoader from './module/browser-loader.js';
import deviceLoader from './module/device-loader.js';
import engineLoader from './module/engine-loader.js';
import systemLoader from './module/system-loader.js';
import gpuLoader from './module/gpu-loader.js';
import languageLoader from './module/language-loader.js';
import networkLoader from './module/network-loader.js';
import otherLoader from './module/other-loader.js';

let getInfo = function(userAgent,isAsync = false){
    let info = {};
    info.userAgent = userAgent || self?.navigator?.userAgent||'';
    [
        browserLoader,
        deviceLoader,
        engineLoader,
        systemLoader,
        gpuLoader,
        languageLoader,
        networkLoader,
        otherLoader
    ].forEach(loader=>loader(info,isAsync));
    return info;
}

function browser(userAgent){
    let info = getInfo(userAgent);
    for(let key in info){
        if(typeof info[key]=='object'){
            info[key] = '';
        }
    }
    return info;   // 旧版同步获取
}

// 新版异步获取
browser.getInfo = function(userAgent){
    let info = getInfo(userAgent,true);
    let keys = Object.keys(info);
    let values = Object.values(info).map(function(value){
        if(typeof value == 'object'){
            return value;
        }else{
            return Promise.resolve(value);
        }
    });
    return Promise.all(values).then(list=>{
        let result = {};
        list.forEach(function(value,index){
            result[keys[index]] = value;
        });
        return result;
    });
};

export default browser;
