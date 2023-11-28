import _Mobile from './device/Mobile';
import _Tablet from './device/Tablet';

export default function(_){
    _.device = 'PC';
    [_Mobile,_Tablet].forEach(function(item){
        if(item.match(_.userAgent)){
            _.device = item.name;
        }
    });
};
