var obj = {
    fog:"banti",
    ad: function() {
    set: 'a' 
    node: 'b'
    node_js: 'c'
   }
}

for (var name in obj) {
    if(obj.hasOwnProperty(name) && typeof obj[name] !==  "function") { 
       console.log(name + " " +obj[name])
    }
 
}
