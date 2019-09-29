function myFunction (v, w, x, y, z) {
   console.log(x, y, z, v, w);
}

const args = [1, 2];
myFunction(...args, 5, 3, 4)    


const args2 = [...args]; //copy one array into another array
console.log(args2);

//merge 2 arrays
const args3 = [3, 4];
const mergedArray = [...args3, ...args2]
console.log(mergedArray);

// Make date
const dateArr = [2019, 08, 29];

// new Date() takes comma seperated constructor arugments
// So we destructure the array using spread operator
const todayDate = new Date(...dateArr);
console.log(todayDate.toISOString());

const name = 'Banti Kumar!';
const nameArr = [...name];
console.log(nameArr);
console.log(nameArr.length);

function result(...args) {
   return args.reduce(((accumulator, currentValue) => accumulator + currentValue),0);
}

console.log(result(1, 2, 3));

function xmas(a, b, ...args) {
   console.log(a);
   console.log(b);
   console.log(args);
} 

xmas(1, 2, 3, 4, 5);

function f(...[a, b, c]) {
   return a + b + c;
}
console.log(f(1, 3, 4))


function myResult(a, ...args) {
   return args.map((x => x* a));
}

const myArray = myResult(2, 2, 3, 6);
console.log(myArray); 
  
  
  