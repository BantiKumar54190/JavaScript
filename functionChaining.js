const obj = function(i) {
    debugger;
    this.i = i;
    this.add = function(i) {
        this.i += i;
        return this;
    };
    this.subtract = function(i) {
       this.i -= i; 
       return this;
    };
    this.print = function() {
        console.log(this.i);
        return this;
    }
}; 

const x = new obj(6);  
x.subtract(2).add(3).print();

const banti = new obj(6);  
banti.print();