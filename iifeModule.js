'use strict'; 

// Wrapping in IIFE ensures we don't pollute the global namespace and enforces abstraction
var x = (function() {
    debugger;
    var name ='banti';
    var age = 25;

    function getDetails() {
        console.log(name + ' ' + age); 
    }

    return {
        getDetails: getDetails
    };
})();

x.getDetails();