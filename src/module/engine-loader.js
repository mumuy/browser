import _Gecko from './engine/Gecko';
import _KHTML from './engine/KHTML';
import _Presto from './engine/Presto';
import _Trident from './engine/Trident';
import _WebKit from './engine/WebKit';

export default function(_,$){
    _.engine = '';
    [_WebKit, _Trident, _Gecko, _Presto, _KHTML].forEach(function(item){
        if(item.match($.userAgent)){
            _.engine = item.name;
        }
    });
};
