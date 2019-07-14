var person = {
    fname: "banti",
    lname: "singh",
    mname: "kumar",
    age : 26
};
console.log(Object.keys(person));//takes the property name into an array
var display = " ";
for(var item in person)
{
    display += person[item] + " "; 
}
console.log(display)