export default {
    name:'HarmonyOS',
    match(ua){
        return ua.indexOf('HarmonyOS') > -1;
    },
    version(ua){
        let v = ua.match(/^Mozilla.*Android ([\d.]+)[;)].*$/)?.[1]||'';
        let hash = {
            '10':'2',
            '12':'3',
        };
        return hash[v] || '';
    }
};
