var a = 'global'

function fullname()
{  
  return this.a;
}
 
console.log(fullname());
