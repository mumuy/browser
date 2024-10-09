import globalThis from '../runtime/globalThis.js';

const GetDeviceInfo = () => {
    return new Promise((resolve) => {
        if(globalThis?.webkit?.messageHandlers?.excuteCmd){
            const randomCv = `cv_${Date.now() % 100000}${Math.floor(Math.random()) * 100}`;
            const params = { key: 'GetDeviceInfo', data: {}, callback: randomCv };
            const Data = JSON.stringify(params);
            globalThis.webkit.messageHandlers.excuteCmd.postMessage(Data);
            globalThis[randomCv] = function (response) {
                delete globalThis[randomCv];
                resolve(JSON.parse(response||'{}'));
            }
        }else{
            return resolve({});
        }
    })
};

export default {
    name: '360EE',
    parse(){
        return {
            is:false,
            version:''
        };
    },
    async is() {
        return GetDeviceInfo().then(function(response){
            return response?.pid=='360csexm'||false;
        });
    },
    async version() {
        return GetDeviceInfo().then(function(response){
            return response?.module_version||'';
        });
    }
}