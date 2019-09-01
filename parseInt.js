function bramha(number , base) {
    var parse = parseInt(number,base);
    if(isNaN(parse)) {
       return 0;
    }
    return parse;
}

console.log(bramha(+Infinity,8))