function myNumberType(n)
{
    this.num=n;
}

myNumberType.prototype.valueOf = function() 
{
    return this.num;
}

var b1 = new myNumberType(4) 
console.log(b1+5)