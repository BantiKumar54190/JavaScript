const array = [1,2,3,4,5];
traverseArray(array,function doubler(value){
    return value*2;
}) ;

function traverseArray(arr,func) {
    let result = '';
       for(const value of array) {
           result += func(value) + ' ';  
          }
       console.log(result);
}