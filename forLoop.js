var person =
{
    fname: "Banti",
    mname: "kumar",
    lname: "singh"
};
var txt = "";
for( var item in person )
{
    txt += person[item] + " ";
   
}
console.log(txt );

