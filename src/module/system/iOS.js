export default {
    name:'iOS',
    match(ua){
        return ua.indexOf('like Mac OS X') > -1;
    },
    version(ua){
        return ua.match(/OS ([\d_]+) like/)?.[1].replace(/_/g, '.')||'';
    }
};
