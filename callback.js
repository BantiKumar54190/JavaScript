function play(higherOrderFunction) {
    higherOrderFunction(2 + 5);
}

play(console.log); // Attach function

// play(function(x) {
//      console.log("Inside anonymous function!");
//      console.log("Parameter", x);
// });

// play(function(...arguments) {
//       console.log(arguments.join('|'));
// });