function multiplier(factor) {
    return function(x) {
    return x*factor; 
    }
}

let var1 = multiplier(2);
console.log(var1(5));