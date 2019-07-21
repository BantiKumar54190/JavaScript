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
var obj = {
    100: 'a',
      2: 'b',
      7: 'c'
}
console.log(Object.keys(obj)) 
console.log(Object.values(obj))
for(var [key,value] of  Object.entries(obj))

    console.log(`${key},${value}`);
for(var item in obj)
{
    display += obj[item] +" "
}
console.log(display)

//The above code shows Object.keys,Object.values,Object.enteries and how to print everything in console