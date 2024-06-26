import _Opera from './Opera.js';

export default {
    name:'Opera GX',
    match(ua){
        let isMatch = false;
        if(_Opera.match(ua)){
            isMatch = ua.includes('Edition GX');
        }
        return isMatch;
    },
    version(ua){
        return ua.match(/Opera\/([\d.]+)/)?.[1]
        ||ua.match(/OPR\/([\d.]+)/)?.[1]
        ||'';
    }
};