export default {
    name:'Kindle',
    match(ua){
        return ua.includes('Kindle')|| ua.includes('Silk/');
    },
    version(ua){
        return ua.match(/Version\/([\d.]+)/)?.[1]||'';
    }
};
