import userAgent from '../runtime/userAgent.js';
import _Firefox from './Firefox.js';

export default {
    name:'Waterfox',
    parse(ua = userAgent){
        return {
            is:ua.includes('Waterfox'),
            version:ua.match(/Waterfox\/([\d.]+)/)?.[1]||''
        };
    },
    async is(){
        let isMatch = this.parse().is;
        if(!isMatch&&_Firefox.parse(userAgent).is){
            return new Promise((resolve) => {
                const image = new Image();
                image.src = 'chrome://branding/content/about-logo.png';
                image.onload = () => {
                    if(image.width){
                        resolve(true);
                    }else{
                        resolve(false);
                    }
                };
                image.onerror = () => {
                    resolve(false);
                };
            });
        }
        return isMatch;
    }
}