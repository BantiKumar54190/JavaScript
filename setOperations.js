const set = new Set();
set.add(1);
console.log(set)
set.add([2, 3]);
console.log(set);
var array = [2, 4];
set.add(array);
set.add([2, 3]);
console.log(set);
console.log(set.has([2, 3]));
console.log(array);
