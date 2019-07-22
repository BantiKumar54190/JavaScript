//shallow
var obj = {
   a : 'banti',
   b : 'vicky',
   c : 'saloni'
};
var obj1 = obj;
console.log(obj,obj1)

//Deep copy i.e pass by value

for ( var item in obj) {
    obj1[item] = obj[item];    
}
console.log(obj1)
       

 
