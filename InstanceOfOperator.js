var c =function  () {vari:'s'}
function d () {}

var o = new c()
console.log(c.vari)
console.log(o instanceof c)
console.log(o instanceof Object)
console.log(o instanceof d)

console.log(c.prototype instanceof Object)
console.log(o instanceof c)
console.log(c.vari)
c.prototype = {}  //it a way 
console.log(c.vari)
console.log(o instanceof c)
var o2 = new c();
console.log(o instanceof c)
console.log(o2 instanceof c)
console.log(o instanceof c)
