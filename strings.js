'use strict';

const str1 = 'Banti kumar';
console.log(str1);

// Any character of the string can be accessed by using index like Arrays
console.log(str1[1]);

// Two strings can be joined using concatenation operator + which gives a immutable string  
const str2 = 'Hi ' + str1;
console.log(str2);

// Before ES6 (2015) people used line continuation operator \ to write multiline strings. These are called string literals. 
const str3 = 'Banti Kumar\n \
lives in Bangalore\n \
works in Mindtree.'; 

console.log(str3);

// After ES6 (2015) template literals were introduced we can write multiline strings and interpolate expressions /variables inside of it 
const str4 = `The result is ${2 * 3}`;
console.log(str4);

const str5 = `Hi ${str1}`;
console.log(str5);

// We can extend string prototype to make our functions
String.prototype.toTitleCase = function() {
    return this[0].toUpperCase() + this.substring(1, this.length);
};

console.log('lalu yadav'.toTitleCase());

/*

In browsers, btoa() global function can be used to encode a ISO-8859-1 (E-ASCII) or a Unicode UTF-8 string to
base-64 encoding and to decode it we use atob() global function.

btoa() cannot encode UTF-16 and UTF-32 encoded Unicode characters because it throws Overflow exception as it
supports only from Ox00 to 0xFF range of characters

const str6 = `Motua`;
console.log('Base 64 encoded: ', window.btoa(str6));
console.log('Base 64 decoded: ', window.atob(window.btoa(str6)));

*/