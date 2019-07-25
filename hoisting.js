var hoisting = function() {
     x = 5;
    var y ;
    console.log(x,y);//This is the case where x is notdeclared but defined but in case of   
    var x;
}
hoisting();
console.log(x)
