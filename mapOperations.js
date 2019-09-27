const x = {};
const a = {};
const c = {number:1} 
x[a] = "b";
console.log(x[a]);

const map = new Map();
map.set(x, "Banti").set(a, "vicky").set(x, "saloni");
console.log(map);

const twoArray = [['key1', 'value1'],['key2', 'value2']];
const myMap = new Map(twoArray);
const myMap1 = myMap.get('key1');  //it is like a getter which gives the value to the corresponding key
console.log(myMap1);

console.log()



