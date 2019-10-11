'use strict';

const str1 = 'my name is Banti Kumar';

/* 
String.prototype.replace will give an immutable string and
will not modify the contents of the existing string. 

Also, it will replace only the first occurence of the old value.
If needed to replace all occurences of the old value we need to specify the global flag /g

Furthermore, String.prototype.replace also takes a replacer function as
overload to evaluate the replacer string dynamically based on an expression.
*/
const replacedString = str1.replace('name', 'fullname');
console.log(replacedString);

const str2 = 'The result is ->';
const replacedString2 = str2.replace('->', () => `: ${2 * 3}`);
console.log(replacedString2);

/* 
String.prototype.startsWith returns a boolean value to check if string starts with a particular substring
*/
console.log(str1.startsWith('my'));
console.log(str1.startsWith('Kumar', 17));

/* 
String.prototype.endsWith returns a boolean value to check if string ends with a particular substring at a given length
*/
console.log(str1.endsWith('name', 7));

/*
String.prototype.includes will check if a substring exists in the main string
*/

/*
String.prototype.join  will join all the strings present in an array
*/  

const array = ['banti', 'vicky', 'saloni'] ;
console.log(array.join());
console.log(array.join(''));
console.log(array.join(' + '));
console.log(array.join(',  '));


/*
    Joining an array like object, if no seperator is passed -> default seperator is comma ,
*/

function joinStrings() {
    const separator = '->';

    // Pre ES6 solution (IE9, IE10, IE11)
    // return Array.prototype.join.call(arguments, separator);

    // Post ES6 solution (Chrome, Firefox, Edge, Opera)
    return [...arguments].join(separator);
}
const joinedString = joinStrings('banti', 'vicky', 'saloni', 'motua', 'linga');
console.log(joinedString);

/* To find index of spaces in a given string */

const bakuda = 'Bakuda has gone to his Hometown Bakuda';
const spaceArray = [];
let index = bakuda.indexOf(' ');
spaceArray.push(index);

while (index !== -1) {
    index = bakuda.indexOf(' ', index + 1);
    if(index === -1) {
        break;
    }
 spaceArray.push(index);    
}
console.log(spaceArray);

/* split() to split the given string on the basis of separator and limit as @param */

const str = 'I work in mindtree global village Bangalore';
const words= str.split(' ', 4);
console.log(words);
console.log(words[3]);
console.log(str.split('r'));

/* includes() to determine whether one string is found within another string */

const java = 'java package are available in the library';
console.log(java[0]);
console.log(java.includes('java', 1));

/* repeat () to determine a new String concatenated with other string and the count is a parameter to repeat function which implies its repetition*/

const word = 'I\'m happy.';
console.log(`I am fine so :  ${word.repeat(3)}`);

/* Splitting of a paragraph on the basis of a particular word by the use of indexOf operator and the use of split operator but seems to be different when split operator is used because in that case the separator is not available in the string Array . Please refer the below example as shown*/


const haystack = `On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.`;

const needle = 'denounce';
const needleIndex = haystack.indexOf(needle);
const subArray = [ 
    haystack.substring(0, (needleIndex - 1)),
    haystack.substring(needleIndex, (needleIndex + needle.length)), 
    haystack.substring((needleIndex + needle.length + 1), haystack.length)
];
console.log(subArray);

console.log(haystack.split('denounce'));

/*
String.prototype.localeCompare() uses the .compareTo() function to compare
strings based on locale and many other options

{
    -1   if a's code point in Unicode is less than b,
    0    if a's code point in Unicode is equal to b,
    1    if a's code point in Unicode is greater than b,
}

The above function is called "Sort-Order" in Javascript strings

*/

const stringNumericArr = ['1', '10', '199', '2'];

// Copied original array as Array.prototype.sort mutates the original array
const copyStringNumericArr = [...stringNumericArr];

// Way 1) Brute force - Runs (n^3 log n) times, too slow for large arrays
let sortedStringArray = copyStringNumericArr.map(x => parseInt(x))
                    .sort((a, b) => a - b)
                    .map(x => x.toString());

// Way 2) Smart Way - Runs n^2 log n times, nearly half of complexity reduced
sortedStringArray = copyStringNumericArr.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));

const accentedString = `änand`;
const nonAccentedString = `anand`;

const baseSortOrder = accentedString.localeCompare(nonAccentedString, 'en', { sensitivity: 'base' });
const accentedSortOrder = accentedString.localeCompare(nonAccentedString, 'en', { sensitivity: 'accent' });
console.log('Base sort order ', baseSortOrder);
console.log('Accented sort order ', accentedSortOrder);
