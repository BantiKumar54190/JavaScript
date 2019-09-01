var obj = {a:1}
function impureFunction(items) {
  var b = 3;
  items.a = items.a + b;
  return items.a;
}
var c = impureFunction(obj);
console.log(c);
console.log(obj.a) 


var obj = { a:3 }
function pureFunction(a) {
    var b = 1;
    a = a + b;
    return a;
}

var c = pureFunction(obj.a)
console.log(c);
console.log(obj.a)


