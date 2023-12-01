import _Mobile from './device/Mobile.js';
import _Tablet from './device/Tablet.js';

export default function(_){
    _.device = 'Desktop';
    [_Mobile,_Tablet].forEach(function(item){
        if(item.match(_.userAgent)){
            _.device = item.name;
        }
    });
};
