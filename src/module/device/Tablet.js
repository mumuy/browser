export default {
    name:'Tablet',
    match(ua){
        let navigator = self?.navigator||{};
        return  ua.indexOf('Tablet') > -1 || ua.indexOf('Pad') > -1 || ua.indexOf('Nexus 7') > -1 || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }
};
