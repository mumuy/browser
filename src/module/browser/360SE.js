import getMime from '../method/getMime.js';
import _Chrome from './Chrome.js';
import _360 from './360.js';
import _globalThis from '../runtime/globalThis.js';

export default {
    name:'360SE',
    match(ua,isAsync=false){
        let isMatch = false;
        if(_360.match(ua)){
            if(getMime("type", "application/gameplugin")){
                isMatch = true;
            }else if(_globalThis?.navigator?.userAgentData?.brands.filter(item=>item.brand=='Not.A/Brand').length){
                isMatch = true;
            }
            if(!isMatch&&isAsync&&document){
                if(!document?.querySelector('#ai-assist-root')){
                    let $ai = document.createElement('div');
                    $ai.setAttribute('id','ai-assist-root');
                    document.body.appendChild($ai);
                    return new Promise(function(resolve,reject){
                        let isResolve = false;
                        const observer = new MutationObserver(mutations => {
                            mutations.forEach(mutation => {
                                if (mutation.type === 'childList') {
                                    mutation.removedNodes.forEach(function($item){
                                        if($item==$ai){
                                            if(!isResolve){
                                                isResolve = true;
                                                resolve(true);
                                            }
                                        }
                                    });
                                }
                            });
                        });
                        const config = { attributes: true, childList: true, subtree: true };
                        observer.observe(document.body, config);
                        setTimeout(function(){
                            if(!isResolve){
                                isResolve = true;
                                resolve(false);
                            }
                        },1500);
                    });
                }else{
                    isMatch = true;
                }
            }
        }
        return ua.includes('360SE')||isMatch;
    },
    version(ua){
        let hash = {
            '122':'15.3',
            '114':'15.0',
            '108':'14.0',
            '86':'13.0',
            '78':'12.0',
            '69':'11.0',
            '63':'10.0',
            '55':'9.1',
            '45':'8.1',
            '42':'8.0',
            '31':'7.0',
            '21':'6.3'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return hash[chrome_version]||'';
    }
};
