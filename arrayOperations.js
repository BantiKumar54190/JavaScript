"use strict"

//sorting using arrow functions
/*debugger;

var objs = [
    { age:44, name:'vinay' },
    { age:24, name:'deepak' },
    { age:74, name:'suresh' }
];

var copyObj = [...objs];

// Sorts in ascending order
copyObj.sort((a, b) => a.age - b.age);

for(var item in copyObj) {
    console.log(copyObj[item]); 
}

// Sorts in descending order
copyObj.sort((a, b) => b.age - a.age);

for(var item in copyObj) {
    console.log(copyObj[item]); 
}*/

//sorting using functions
var objs = [
    { age:44, name:'vinay' },
    { age:24, name:'deepak' },
    { age:74, name:'suresh' }
];

//copying array objs
var copyObj = [...objs];

//sort in ascending order using unnamed function
/*copyObj.sort(function(a, b) { 
        return a.age - b.age;
});
for(var item in copyObj) {
    console.log(copyObj[item]); 
}


//sort in descending order  using unmaned function
copyObj.sort(function (a, b){
    return b.age - a.age;
});

for(var item in copyObj) {
    console.log(copyObj[item]); 
}*/

//sorting in ascending order using named function 
copyObj.sort(function ascendingSort(a, b) {
    return a.age - b.age;
});
for(var item in copyObj) {
    console.log(copyObj[item]); 
}

//sorting in descending order using named function 
copyObj.sort(function descendingSort(a, b){
    return b.age - a.age;
})
for(var item in copyObj){
    console.log(copyObj[item]);
}
