export default {
    name:'Edge',
    match(ua){
        return ua.includes('Edge')
        ||ua.includes('Edg/')
        ||ua.includes('EdgA')
        ||ua.includes('EdgiOS');
    },
    version(ua){
        return ua.match(/Edge\/([\d.]+)/)?.[1]
        ||ua.match(/Edg\/([\d.]+)/)?.[1]
        ||ua.match(/EdgA\/([\d.]+)/)?.[1]
        ||ua.match(/EdgiOS\/([\d.]+)/)?.[1]
        ||'';
    }
};
