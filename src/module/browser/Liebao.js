import _Chrome from './Chrome';

export default {
    name:'Liebao',
    match(ua){
        return ua.indexOf('LBBROWSER') > -1|| ua.indexOf('LieBaoFast') > -1;
    },
    version(ua){
        let version = ''
        if(ua.indexOf('LieBaoFast')>-1){
            version = ua.replace(/LieBaoFast\/([\d.]+)/, '$1');
        }
        let hash = {
            '79':'8.0',
            '57':'6.5',
            '49':'6.0',
            '46':'5.9',
            '42':'5.3',
            '39':'5.2',
            '34':'5.0',
            '29':'4.5',
            '21':'4.0'
        };
        let chrome_version = parseInt(_Chrome.version(ua));
        return version||hash[chrome_version]||'';
    }
};
