var person = { firstname:'Banti' , lastname : 'kumar'}
fullname = function (a,b) {
  return  this.firstname + " " + this.lastname + " "+ "ages =" +" "+ (a + b)  ;
} 
console.log(fullname.call(person,5,6));
console.log(fullname.apply(person,[5,6]));
var newPerson=fullname.bind(person);
console.log(newPerson(5,6))





