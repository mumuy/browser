import _Mobile from './device/Mobile';
import _Tablet from './device/Tablet';

export default function(_,ua){
    _.device = 'PC';
    [_Mobile,_Tablet].forEach(function(item){
        if(item.match(ua)){
            _.device = item.name;
        }
    });
};
