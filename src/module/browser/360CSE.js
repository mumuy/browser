import _globalThis from '../runtime/globalThis.js';

const GetDeviceInfo = () => {
    return new Promise((resolve) => {
        const randomCv = `cv_${new Date().getTime() % 100000}${Math.floor(Math.random()) * 100}`
        const params = { key: 'GetDeviceInfo', data: {}, callback: randomCv }
        const Data = JSON.stringify(params)
        if(window?.webkit?.messageHandlers){
            window.webkit.messageHandlers['excuteCmd'].postMessage(Data)
            window[randomCv] = function (response) {
                delete window[randomCv];
                resolve(response||{});
            }
        }else{
            return resolve({});
        }
    })
};

export default {
    name: '360CSE',
    match(ua) {
        return GetDeviceInfo().then(function(response){
            return response?.pid=='360csexm';
        });
    },
    version(ua) {
        return GetDeviceInfo().then(function(response){
            return response?.module_version||'';
        });
    }
};