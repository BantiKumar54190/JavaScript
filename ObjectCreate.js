var cat = {
    name : "banti",
    atSound : function() {
       console.log( this.name  ) 
   }
};

cat.name = "Anamika" ;

(cat.atSound());
var cat1 = Object.create(cat)
cat1.atSound()
 



