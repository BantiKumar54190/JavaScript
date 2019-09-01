/* Arrow functions 

// Arrow function 
var a = 20;

function func1() {
	this.a = 30,
	this.func = () => {
		var a = 10;
		setTimeout(() => {
			console.log(this.a);
		}, 1000);
	}
};

new func1().func();

*/