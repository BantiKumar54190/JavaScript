var  x =  
{
    str : "sffb",
    age : "number",
    last : "kumar",
    first : "banti",
    fullname : function ()
    {
  return this.first + " " + this.last;
    }
};
var k = Object.create(x);
console.log(x.fullname());
console.log(k.fullname())