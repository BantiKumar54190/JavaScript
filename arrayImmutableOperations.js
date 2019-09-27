"use strict";

var obj = [{ key: 1, name: 'Banti',age: 26,  sex: 'Male'},
           { key: 2, name: 'Linga',age: 100, sex: 'Male'},
           { key: 3, name: 'Bakuda',age: 25, sex: 'Male'}]; 

var reformattedArray = obj.map((x, i) =>{
    let rObj = {};
    rObj[x.sex] = x.age;
    rObj.id = i;
    return rObj;

});      

console.log(reformattedArray);


var array = [1,3,5];
var doubles = array.map(num => { return num * 2 });
console.log(doubles);



obj.map((x,i) => ({ key: 1, name: 'Banti',age: 26 }));
//obj.map((y,i)) =>({})


let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present'];
const modifiedWords = words.filter((word,index,arr) => {
  arr[index+1] +=' extra';
  return word.length < 6;
});

console.log(modifiedWords);

const modifiedWords1= words.filter((word, index, arr) => {
  arr[index] +='enter';
  return word.length<6; 
});

console.log(modifiedWords1);

const fruits = ['AB', 'B', 'C', 'D', 'E'];

var tolo= fruits.filter(function(x){ return  x.toLowerCase }); 
console.log(tolo);

var fruits1 = ['Water', 'Orange', 'Apple', 'banana', 'Litchi'];
function filter(arr) {
   return arr.filter(function(x) {
      return x.length>5;
    });
} 

function addFruits(arr) {
  return arr.filter((fruit, index) => {
    arr.push('new');
      return fruit.length>2;
  });
}


var arr = [1, 2, 3, 4];
var sum = function(arr) {
  return arr.reduce(((accumulator, currentValue) => accumulator + currentValue), 10);
}

console.log(filter(fruits1));
console.log(addFruits(fruits1));
console.log(sum(arr));


const articles = [
  {dateAdded: "31-5-1989", readId: 123, article: [{ id: 1, age: 20 }] },
  {dateAdded: "31-5-1980", readId: 124, article: [{ id: 2, age: 15 }] },
  {dateAdded: "31-5-1981", readId: 125, article: [{ id: 1, age: 40 }] },
  {dateAdded: "31-5-1983", readId: 126, article: [{ id: 2, age: 14 }] },
  {dateAdded: "31-5-1984", readId: 127, article: [{ id: 1, age: 21 }] },
  {dateAdded: "31-5-1988", readId: 128, article: [{ id: 3, age: 28 }] }
];


const filteredArticles = articles.filter(x => {
    // Return boolean value for filter arrow function
    // Add all predicates for some function
    return x.article.some(y => y.id === 1 && y.age >= 20 && y.age <= 30);
});

const projectedArticles = articles.map(x => x.article)
                         .flatMap(x => x)
                         .map(x => x.age);

const chooseDates = articles.map(x => ({ newDate: x.dateAdded }));
console.log(chooseDates);


const names = ["Banti", "Banti", "Gandu", "Kundan", "Linga", "Bakuda", "Gire", "Mishra", "Kunal", "Motua", "Tamannah", "Tamannah", "Muttu", "Kudupalli", "Kudupalli", "Kundan", "Suraj singh"];

//1st way 
const frequencyOfNames = Object.entries(names.reduce((acc, curr) => {
         if(!acc[curr]) {
           acc[curr] = 1;
         } else {
           acc[curr] += 1;
         }
         return acc;
}, {}))
.map(x => ({ name: x[0], frequency: x[1] }));

console.log(frequencyOfNames);



//2^nd way
const uniqueNames = Object.entries(names.reduce(((acc, curr) => {
      if (curr in acc) {
        acc[curr]++;
      } else {
         acc[curr] =1;
      }
      return acc
  }), {})).map(x => ({nam1 : x[0], numbers: x[1]}));

console.log(uniqueNames);

const onlySuraj = names.filter(x => x === "Suraj singh RAJPUT")[0] || ''; 
        
console.log(onlySuraj);   

const stringLengthGreaterThanEight =  names.filter(x => x.length > 8); 
console.log(stringLengthGreaterThanEight);


//Array.prototype.find()
const arr1 = [1, 2, 3, 4, 5]
const found = arr1.find(x => x > 2);
console.log(found);
console.log(arr1.indexOf(!found)); 


const inventory = [
  [{name: 'apples', quantity: 2}],
  [{name: 'bananas', quantity: 0}],
  [{name: 'cherries', quantity: 5}]
];

const findbananas = inventory.find(x => x === 'bananas');
console.log(findbananas);

const filteredArray = inventory.filter(x => x.some(y => y.name === 'bananas'));
console.log(filteredArray);



const even = arr1.some(x => x % 2 === 0);
console.log(even);

function isBiggerThanTen(element, index, arr1) {
  return element > 10;
}

console.log(arr1.some(isBiggerThanTen));

const fruits2 = ['Apple', 'banana', 'Amrud', 'Anar' ]

function checkAvailability(arr, arrval) {
  return arr.some(x => x===arrval )
}

console.log(checkAvailability(fruits2, 'kela'));
console.log(checkAvailability(fruits2, 'banana'));


const truthy_values = [true, 'true', 1];
function getBoolean(value) {
  if(typeof value === 'string' ) {
      //value = value.toLowerCase.trim();
  }
  return truthy_values.some(t => t===value);
}

console.log(getBoolean(false));
console.log(getBoolean(true));
console.log(getBoolean(1));
console.log(getBoolean('true'))
 
const resultOfEvery = arr1.every(x => x % 1 === 0);
console.log(resultOfEvery);

const nums = [2, 3, 5, 7, 11, 13];

const moduleObj = (function() {
  function isPrime(x, i, arr) {
    for (let i = 2; i < Math.floor(Math.sqrt(x)); i++) {
      if (x % i === 0) {
        return false;
      }
    }

    return true;
  }

  return {
    isPrime
  };
}());
 
const areAllPrime = nums.every(moduleObj.isPrime);

console.log(areAllPrime);


const number = [1, 2, 3, 4, 5]
const flatArray = number.map( x => [x * 2]);
console.log(flatArray);

const stringArray = ["hi this is Mr Banti kumar's property", 'India'] 
const flatmapString = stringArray.flatMap( x => x.split(" "));
console.log(flatmapString);
const mapString = stringArray.map(x => x.split(" "));
console.log(mapString);

const indexOfArray = number.indexOf(3);
console.log(indexOfArray);

const groupOfLetter = ['a', 'b', 'c', 'd', 'e', 'a']; 
const element = 'a';
const indexOfLetter = groupOfLetter.indexOf(element);
console.log(indexOfLetter);

const storeLetters = [];
let index, i = 0;
while ((index = groupOfLetter.indexOf(element, i++)) !== -1) {
    if (storeLetters.indexOf(index) !== -1) {
      break;
    }

    storeLetters.push(index);
}

console.log(storeLetters);



let array1 = [5, 3, 7, 1];
let array2 = [2, 4, 6];
Array.prototype.push.apply(array1, array2);
console.log(array1);

const min = Math.min.apply(Math, array1);
const max = Math.max.apply(Math, array1);
console.log(min, max);

const indices = [];
const givenArray = ['a', 'b', 'c', 'd', 'w', 'a' ];

let idx = givenArray.indexOf(element);
while(idx !== -1) {
  indices.push(idx);
  idx = givenArray.indexOf(element , idx + 1);
}
console.log(indices);

function counter() {
  this.count = 0;
  this.sum = 0;
} 

counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
}

const obj1 = new counter();
obj1.add([1, 2, 3]);
console.log(obj1.sum);
console.log(obj1.count);

const details = [{name: "banti", age: 26}, {name: "kunal", age: 25}, {name: 'bakuda', age:23}, {name: "kunal", age: 17}];

// {name: "kunal", age: 25}.name = 'Kunal'
const onlyName = details.find(x => x.name === 'kunal').name || '';
console.log(onlyName);



//find index is same as filter[0] in javascript
const arrayOfElements = [1, 3, 4, 5];

console.log(arrayOfElements.findIndex(x => x === 1 ));
console.log(arrayOfElements.findIndex(x => x % 2 === 0));
