export default {
    name:'HarmonyOS',
    match(ua){
        return ua.indexOf('HarmonyOS') > -1;
    },
    version(ua){
        let v = +ua.match(/HMSCore (\d+.\d+)/)?.[1]||0;
        if(v>=6.1){
            return '4.0';
        }else if(v>=6.0){
            return '3.0';
        }else if(v>=5.0){
            return '2.0';
        }else if(v>=4.0){
            return '1.0';
        }else{
            return '';
        }
    }
};
