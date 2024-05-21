export default {
    name:'Servo',
    match(ua){
        return ua.indexOf('Servo/') > -1;
    }
};