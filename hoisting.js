"use strict "
var hoisting = function() {
    var    y
    x = 5;
  
    console.log(x,y);//This is the case where x is notdeclared but defined but in case of   
   
}
//hoisting();

console.log(x)


var y = 2 ;
var x = function() {
    
    console.log(y);
    var y;//This is called hoisting in javaScript as y gets declared at the top so it is undefined in this case 


}
x();

