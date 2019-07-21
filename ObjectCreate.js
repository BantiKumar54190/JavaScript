var cat = {
    atSound : function() {
       console.log( this.name  ) 
   }
};
cat.name = "anamika" ;

(cat.atSound());
var cat1 = Object.create(cat)
cat1.atSound()




