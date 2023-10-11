export default {
    name:'Sogou',
    match(ua){
        return ua.indexOf('MetaSr') > -1 || ua.indexOf('Sogou') > -1;
    },
    version(ua){
        return ua.match(/^.*SE ([\d.X]+).*$/)?.[1]
        ||ua.match(/^.*SogouMobileBrowser\/([\d.]+).*$/)?.[1]
        ||'';
    }
};
