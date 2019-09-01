const a = 10;

const addTo = function (passed)  {
    const add = (inner)=> {   
     return multiply = (multiple)=> {
             // Able to access lexically scoped values (e.g passed,inner,a)
             console.log(a);
             return  (multiple * inner) + passed;
     }
  }
  return add ;
}

const outer = new addTo(3)(5)(3);
console.log(outer);
