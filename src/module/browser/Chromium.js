export default {
    name:'Chromium',
    match(ua){
        return ua.indexOf('Chromium') > -1;
    },
    version(ua){
        return ua.match(/Chromium\/([\d.]+)/)?.[1]||'';
    }
};
