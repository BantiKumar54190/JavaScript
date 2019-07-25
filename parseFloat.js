function circumference(r) {
var parse = 2*r*Math.PI;
  if(isNaN(parse))
     {
      return 0;
     }
      return parse;
}
console.log ( circumference(3.12));
