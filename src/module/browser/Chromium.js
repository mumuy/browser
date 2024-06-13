export default {
    name:'Chromium',
    match(ua){
        return ua.includes('Chromium');
    },
    version(ua){
        return ua.match(/Chromium\/([\d.]+)/)?.[1]||'';
    }
};
