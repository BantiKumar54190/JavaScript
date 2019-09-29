'use strict';

const arr = [1, 2];
let [a, b] = arr;
console.log(a, b);

//Swap 2 no.s
[b, a] = arr;
console.log(a, b);

//passing an array from a function
function array() {
    return [1, 3, 4]
}

const [d, e, f] = array();
console.log(d, e, f);

//ignoring some returned values 
const [m,  , y] = array();
console.log(m, y);


//destructuring of objects
var obj = {p: 1, q: 4};
var {p, q} = obj;
console.log(p);
console.log(q);

var user = {
    id: 42,
    displayName: "Ayurveda",
    fullName: {
        firstName: "banti",
        lastName: "kumar"
    }
};

function userId({id}) {
    return id;
}

function whoIs({displayName, fullName: {firstName: name}} ){
    return `${displayName} is ${name}`;
}

console.log(userId(user));
console.log(whoIs(user));

//setting fn value

function drawChart({size= 'small', coordinates = {x: 34, y: 33}, distance = 123} = {}) {
    console.log(size, coordinates, distance);
}

drawChart({
    coordinates: {x: 44, y: 88},
    distance: 100000000
});



//Nested object and array destructrin
const data = {
    mid: "m1039397",
    personal_details: [
         { 
             name: "Banti",
             age: 24,
         },
         {
            work: "Mindtree",
            office_hrs: 9,   
        }    
    ]
};

let {
    mid: mindtreeid,
    personal_details: [
        {
            name: firstname,
        }
    ]
} = data;

console.log(mindtreeid);
console.log(firstname);


//forof iteration and destructuring
const cities = [
        {
            name : "Bengaluru",
            details: {
                city_neighbour: "mysore",
                city_river: "kaveri"
        }
    },

        {
            name : "patna",
            details: {
                city_neighbour: "Bihta",
                city_river: "Son"
        
        
        }
    }
];

for(const {name: n , details: {city_neighbour: neigh}, details: {city_river: river}} of cities) {
    console.log('Name'+ n  +'\n ' , "neighbouring_cities"+ ' '+neigh + ' River'+ ' '+ river);
}