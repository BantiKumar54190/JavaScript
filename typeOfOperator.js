var obj = {
    name:'banti',
    age:26,
    fullname: function()
    {
        return this.name ,this.age; 
}
};

for (var item in obj) {
  
     if(obj.hasOwnProperty(item) && typeof obj[item]!=='function') {
         console.log(obj[item]);

     }
       
  }