import _globalThis from '../runtime/globalThis.js';

const GetDeviceInfo = () => {
    return new Promise((resolve) => {
        const randomCv = `cv_${new Date().getTime() % 100000}${Math.floor(Math.random()) * 100}`
        const params = { key: 'GetDeviceInfo', data: {}, callback: randomCv }
        const Data = JSON.stringify(params)
        if(_globalThis?.webkit?.messageHandlers){
            _globalThis.webkit.messageHandlers['excuteCmd'].postMessage(Data)
            _globalThis[randomCv] = function (response) {
                delete _globalThis[randomCv];
                resolve(JSON.parse(response||'{}'));
            }
        }else{
            return resolve({});
        }
    })
};

export default {
    name: '360EE',  // 360CSE，Mac版360浏览器
    match(ua) {
        return GetDeviceInfo().then(function(response){
            return response?.pid=='360csexm'||false;
        });
    },
    version(ua) {
        return GetDeviceInfo().then(function(response){
            return response?.module_version||'';
        });
    }
};