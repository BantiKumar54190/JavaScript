var doSomething = function(q) {
    console.log(q);
    q();
};

 doSomething(function() {
       var b = "No Problem"; 
       console.log("print "+b);
});        


//function declaration
function name() {
    name = "banti";
    age = 26;
    color ="white";
    console.log(name + " " +age +" " +color)
}

name()