export default {
    name:'Mac OS',
    match(ua){
        return ua.indexOf('Macintosh') > -1;
    },
    version(ua){
        return ua.match(/Mac OS X -?([\d_]+)/)?.[1].replace(/_/g, '.')||'';
    }
};
