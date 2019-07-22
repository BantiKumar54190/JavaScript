var a = 'global';

function fullname()
{  
  return this.a;
}
 
console.log(this);
console.log(this.a);
console.log(fullname());
