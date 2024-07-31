import userAgent from '../runtime/userAgent.js';

export default {
    name:'Vivaldi',
    parse(ua = userAgent){
        return {
            is:ua.includes('Vivaldi'),
            version:ua.match(/Vivaldi\/([\d.]+)/)?.[1]
                ||ua.match(/Chrome\/([\d.]+)/)?.[1]
                ||''
        };
    },
    async is(){
        let isMatch = this.parse().is;
        return new Promise(function(resolve){
            if(!isMatch){
                fetch('chrome-extension://jffbochibkahlbbmanpmndnhmeliecah/config.json').then(function(){
                    resolve(true);
                }).catch(function(){
                    resolve(false);
                });
            }else{
                resolve(false);
            } 
        });
    }
}