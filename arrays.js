    // To create an Array constructor
    const newArray = new Array(10);
    console.log(newArray);
    const modifiedArray = newArray.fill('0'); 
    console.log(modifiedArray);

    // Pushing element into an Array
     const push = newArray.push("11");
     console.log(newArray);
     const pop = newArray.pop();
     console.log(newArray);
     const unshift = newArray.unshift("1");
     console.log(newArray);
     const shift = newArray.shift("1"); 
     console.log(newArray);

    //mutation in an array
    const array = [1,2,3,4,5,6,7,8];
    console.log(array);

    //replace a value by another value
    array[2] = 5;
    console.log(array);

    //to add an element at a given index
    array.insert(3,"100");
    console.log(array);



