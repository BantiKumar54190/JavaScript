/*var  x =  
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
console.log(t.age);*/



var a=['5', '1', '1','3','1'];
var t =a.length;
var item=0;
for (var item in a )
  // console.log(a[item]);
 for (var k =0; k<t;k++)  
 {
   for(var item1=0;item1<t;item1++ )
   {
        var array = array + a[item1];
        while(item1<t)
        {  
            if(array === 6)
            {
              console.log(a [item1] );
              var a = []; 
              a[i] =item1;
            }
        }
      } 
      array = 0;  
   }
