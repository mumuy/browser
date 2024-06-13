export default {
    name:'macOS',
    match(ua){
        return ua.includes('Macintosh');
    },
    version(ua){
        return ua.match(/Mac OS X -?([\d_]+)/)?.[1].replace(/_/g, '.')||'';
    }
};
