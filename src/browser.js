import browserParser from './module/browser-parser.js';
import systemParser from './module/system-parser.js';
import deviceParser from './module/device-parser.js';
import gpuParser from './module/gpu-parser.js';
import networkParser from './module/network-parser.js';
import batteryParser from './module/battery-parser.js';
import screenParser from './module/screen-parser.js';
import languageParser from './module/language-parser.js';
import timezoneParser from './module/timezone-parser.js';

import supportFontFamily from './module/support/fontFamily.js';

export default {
    parse(ua){
        let data = {};
        [
            browserParser,
            systemParser,
            deviceParser,
        ].forEach(parser=>{
            data = Object.assign(data,parser.parse(ua));
        });
        return data;
    },
    async getInfo(list = ['browser','system','device','gpu','network','battery','screen','language','timezone']){
        let data = {};
        let parserList = [
            browserParser,
            systemParser,
            deviceParser,
            gpuParser,
            networkParser,
            batteryParser,
            screenParser,
            languageParser,
            timezoneParser
        ].filter(parser=>list.includes(parser.name));
        for(let parser of parserList){
            data = Object.assign(data,await parser.getInfo());
        }
        return data;
    },
    isSupport(name,value){
        let support = [
            supportFontFamily
        ].find(support=>name==support.name);
        return support?support.is(value):false;
    }
};
