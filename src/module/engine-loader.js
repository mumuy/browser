import _Gecko from './engine/Gecko.js';
import _KHTML from './engine/KHTML.js';
import _Presto from './engine/Presto.js';
import _Trident from './engine/Trident.js';
import _WebKit from './engine/WebKit.js';

import _Chrome from './browser/Chrome.js';

export default function(_){
    _.engine = '';
    [_WebKit, _Trident, _Gecko, _Presto, _KHTML].forEach(function(item){
        if(item.match(_.userAgent)){
            _.engine = item.name;
        }
    });

    //修正
    if (_.browser == 'Edge') {
        _.engine = parseInt(_.browserVersion)>75?'Blink':'EdgeHTML';
    } else if (_Chrome.match(_.userAgent)&& _.engine=='WebKit' && parseInt(_Chrome.version(_.userAgent)) > 27) {
        _.engine = 'Blink';
    } else if (_.browser == 'Opera' && parseInt(_.browserVersion) > 12) {
        _.engine = 'Blink';
    } else if (_.browser == 'Yandex') {
        _.engine = 'Blink';
    }
};
