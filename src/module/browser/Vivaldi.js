import _globalThis from '../runtime/globalThis.js';

export default {
    name:'Vivaldi',
    match(ua,isAsync=false){
        let isMatch = ua.includes('Vivaldi');
        if(!isMatch&&isAsync){
            return new Promise(function(resolve){
                fetch('chrome-extension://jffbochibkahlbbmanpmndnhmeliecah/config.json').then(function(){
                    resolve(true);
                }).catch(function(){
                    resolve(false);
                });
            });
        }
    },
    version(ua){
        return ua.match(/Vivaldi\/([\d.]+)/)?.[1]||ua.match(/Chrome\/([\d.]+)/)?.[1]||'';
    }
};
