function error (){ 
	try {
		throw new Error("this is a new error");
	}
	finally {
		console.log("Hey I got it finally"); 
	}
}

function divError() {
    try {
        debugger;
        let a = 1;
        let b = 0;
        let res = a / b;
    } catch (err) {
        throw err;
    }
}

function propagateError() {
	try {
	    debugger;
		divError();
	}
	catch(e) {
	     debugger;
		 console.log(e.message);
    }
}

propagateError();