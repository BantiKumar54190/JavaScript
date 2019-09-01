var person =
{
    fname: "Banti",
    mname: "kumar",
    lname: "singh"
};
console.log(person.fname)
var txt = "";
for( var item in person )
{
    txt += person[item] + " ";
   
}
console.log(txt );

