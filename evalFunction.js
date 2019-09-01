/*function f(a ,b) {
    this.a =a;
    this.b =b;
    console.log(eval('this.a + this.b'));
};

var y = new f(3,5);
console.log(y.valueOf);
console.log(eval());*/

  var person =  {
    age : 12,
    name : 'Mantu',
    personName : function() {
       return this.age + " , " + this.name;
       }
   };
   
   console.log(person.personName());
