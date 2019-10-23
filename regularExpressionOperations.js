/*
    RegExp.prototype.test() returns a true/false value checking if the match is found or not
*/
const digitRegex = /[0-9]/;
const str1 = 'This has 99 dosas.';
const doesHaveDigit = digitRegex.test(str1);
console.log(doesHaveDigit);

/*
    String.prototype.search() returns the first occurence of zero-based index,
    if no match found then it returns -1
*/
const digitIndex = str1.search(digitRegex);
console.log(digitIndex);

/*
    String.prototype.match() returns all captured groups if found in array.
    If no captured groups are found then it returns just the match if any match found.
*/
const groupRegex = /([A-Za-z]+)/g;
const matches = str1.match(groupRegex);
console.log(matches);


/*
RegExp.prototype.exec() is used to loop all subsequent matches if there are any in the text.

It produces an array-like variable, where the entire match is stored at the 0 based  index.
If any capturing group is used they are stored in 1st, 2nd and subsequent indexes.

The .lastIndex gets set to the point where will it resume matching and is mutated every time a match is found.
The .index property on the match variable will give the exact 0-based index where its matched.
*/

// Counting space indices example
const spaceRegex = /\s+/g;
let spaceIndicesArray = [];
let match;

while ((match = spaceRegex.exec(str1)) !== null) {
    spaceIndicesArray.push(spaceRegex.lastIndex-1);
    console.log(spaceRegex.lastIndex-1);
}

console.log(spaceIndicesArray);