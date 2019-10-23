'use strict';

function *fibonacci(n) {
    // First two fibonacci numbers
    let current = 0;
    let next = 1;

    // 0 is falsy value, generate until you get falsy value
    while (n--) {
        yield current;
        [current, next] = [next, current + next];
    }
}

const fibonacciGenerator = fibonacci(5);

for (const item of fibonacciGenerator) {
    console.log(item);
}

// To convert a generator to an array, we use spread operator
const fibonacciNumbers = [...fibonacci(5)];

/* We can nest generators inside generators
To invoke nested generators prefix it with the yield keyword
To invoke a regular function just invoke it with parenthesis
*/
function *generator1(n) {
    yield n;
    yield n + 1;
    yield *generator2(n);
    return func();
    // Unreachable code, because func() returns to the caller
    yield n + 2;
}

function *generator2(n) {
    yield n * 10;
    yield n * 1000;
    yield n * 10000;
}

function func() {
    return 2;
}

const gen1 = generator1(10);

/* Generator functions can be iterated via for...of loop */
for (const item of gen1) {
    console.log(item);
} 