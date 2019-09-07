//Range Error
/*function check(n) {
    if (!(n > 0 && n < 500)) {
    throw new RangeError ("Number must be within 0 and 500");
    }

    if(typeof(n)==='string') {
        throw new TypeError("value must be a number");
    }
}

    try {
        check("five");
    } catch(e) {
        if (e instanceof RangeError) {
            console.log(e.message);
        }

        if(e instanceof EvalError) {
            console.log(e.message);
        }

        if(e instanceof TypeError ) {
            console.log(e.message);
        }
        
    }  */


    //

            var obj = ((function() {
                function checkError(n) {
                    if (!(n>0 && n<500)) {
                        throw new Error("Number is not within the range");
                    }
                }
            
            return { 
                checkError : checkError 
            };
        })());

            try {
                obj.checkError(1233);
            } catch(e) {
                if (e instanceof RangeError) {
                    console.log(e.message);
                }
                if (e instanceof TypeError) {
                    console.log(e.message);
                } 
                if(e instanceof EvalError) {
                console.log(e.message);
                }
                if (e instanceof SyntaxError) {
                console.log(e.message);
                }
        }