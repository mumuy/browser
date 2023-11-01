import _Gecko from './engine/Gecko';
import _KHTML from './engine/KHTML';
import _Presto from './engine/Presto';
import _Trident from './engine/Trident';
import _WebKit from './engine/WebKit';

import _Chrome from './browser/Chrome';

export default function(_,ua){
    _.engine = '';
    [_WebKit, _Trident, _Gecko, _Presto, _KHTML].forEach(function(item){
        if(item.match(ua)){
            _.engine = item.name;
        }
    });

    //修正
    if (_.browser == 'Edge') {
        _.engine = parseInt(_.browserVersion)>75?'Blink':'EdgeHTML';
    } else if (_Chrome.match(ua)&& _.engine=='WebKit' && parseInt(_Chrome.version(ua)) > 27) {
        _.engine = 'Blink';
    } else if (_.browser == 'Opera' && parseInt(_.browserVersion) > 12) {
        _.engine = 'Blink';
    } else if (_.browser == 'Yandex') {
        _.engine = 'Blink';
    }
};
