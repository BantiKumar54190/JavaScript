var obj = { num:2};
var obj1 = function(a,b,c) {
   return this.num + a + b +c;
}

console.log(obj1.call(obj,1,2,3))
var array = [1,2,3]
console.log(obj1.apply(obj,array))

var obj2 = obj1.bind(obj);
console.log(obj2(1,2,3))


