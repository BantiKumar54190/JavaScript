var  x =  
{
    str : "sffb",
    age : "number",
    last : "kumar",
    first : "banti",
    fullname : function ()
    {
  return this.first + " " + this.last + " " + this.str;
    }
};
var k = Object.create(x);
console.log(x.fullname());
console.log(k.fullname());
var t= Object.create(k);~
console.log(k.fullname());
var t = new Object(true);
console.log(t.age);


