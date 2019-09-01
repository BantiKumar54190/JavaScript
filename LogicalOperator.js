 function t() {
    return true;
}

 function u() {
    return false;
}

console.log(t)
p = (t && u);

console.log(p)
var x = true ;
var y = false;

console.log(x && y);//if the first condition is false it is not going to see the other condition,thus short circuiting
console.log(x||y )//if the first condition is true it is going to give true and hence it will not check for the other condition  