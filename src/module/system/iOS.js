export default {
    name:'iOS',
    match(ua){
        return ua.includes('like Mac OS X');
    },
    version(ua){
        return ua.match(/OS ([\d_]+) like/)?.[1].replace(/_/g, '.')||'';
    }
};
