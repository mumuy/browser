import _Firefox from './Firefox.js';
import _Edge from './Edge.js';
import _Opera from './Opera.js';
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
        if(!isMatch&&!_Firefox.parse().is&&!_Edge.parse().is&&!_Opera.parse().is){
            try {
                Promise.any([
                    fetch('chrome-extension://jffbochibkahlbbmanpmndnhmeliecah/config.json'),
                ]).then(() => {
                    return true;
                }).catch(() => {
                    return false;
                });
            } catch (error) {
                return false;
            }
        }
        return isMatch;
    },
    async version() {
        if (navigator.userAgentData?.getHighEntropyValues) {
            const item = await navigator.userAgentData.getHighEntropyValues([
                'brands'
            ]);
            return item.brands.find(temp=>temp.brand=='Vivaldi')?.version|| '';
        }
        return this.parse().version;
    }
}