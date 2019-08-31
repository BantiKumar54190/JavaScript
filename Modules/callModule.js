import {add, subtract, product } from './es6Module.js'
import func from './defaultES6Module.js';

debugger;
const sum = add(2, 3);
const diff = subtract(3, 5);
const prod = product(2, 3);

console.log(sum);
console.log(diff);
console.log(prod);
console.log(func());