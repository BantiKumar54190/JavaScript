//Arrow function does not have its own this
var a = 10;
    function func() {
             this.a=20;
                  setTimeout(()=> {
                          console.log(i)},1000)
                      };
     new func();
     
//Arrow functions are not hoisted at the top of the scope
 function func1() {
     console.log(a);
    var func = () => {
        console.log(a);
        var a = 3 ;
    }
}

//Normal functions are hoisted at the top of the current scope

function func1() {
    debugger;
       
        this.func = function() {
            console.log(a);
            var a = 3 ;
            debugger;
            console.log(a);
       }
    }

  new func1().func();  

  //Arrow function does not have its own arguments

  let func = () => {
       console.log(arguments);
  }

  func(1,2,3,4);

  