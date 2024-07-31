import browserLoader from './module/browser-loader.js';
import systemLoader from './module/system-loader.js';
import deviceLoader from './module/device-loader.js';
import gpuLoader from './module/gpu-loader.js';
import networkLoader from './module/network-loader.js';
import batteryLoader from './module/battery-loader.js';
import screenLoader from './module/screen-loader.js';
import languageLoader from './module/language-loader.js';
import timezoneLoader from './module/timezone-loader.js';

export default {
    parse(ua){
        let data = {};
        [
            browserLoader,
            systemLoader,
            deviceLoader,
        ].forEach(loader=>{
            data = Object.assign(data,loader.parse(ua));
        });
        return data;
    },
    async getInfo(list = ['browser','system','device','gpu','network','battery','screen','language','timezone']){
        let data = {};
        let loaderList = [
            browserLoader,
            systemLoader,
            deviceLoader,
            gpuLoader,
            networkLoader,
            batteryLoader,
            screenLoader,
            languageLoader,
            timezoneLoader
        ].filter(loader=>list.includes(loader.name));
        for(let loader of loaderList){
            data = Object.assign(data,await loader.getInfo());
        }
        return data;
    }
};
