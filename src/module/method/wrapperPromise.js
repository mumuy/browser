export default function(list){
    return list.map(function(value){
        if(value instanceof Promise){
            return value;
        }else{
            return  Promise.resolve(value);
        }
    });
};