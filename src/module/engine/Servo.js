export default {
    name:'Servo',
    match(ua){
        return ua.includes('Servo/');
    }
};
