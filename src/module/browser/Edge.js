export default {
    name:'Edge',
    match(ua){
        return ua.indexOf('Edge') > -1||ua.indexOf('Edg/') > -1||ua.indexOf('EdgA') > -1||ua.indexOf('EdgiOS') > -1;
    },
    version(ua){
        return ua.match(/Edge\/([\d.]+)/)?.[1]
        ||ua.match(/Edg\/([\d.]+)/)?.[1]
        ||ua.match(/EdgA\/([\d.]+)/)?.[1]
        ||ua.match(/EdgiOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
