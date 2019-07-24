function f(a ,b) {
    this.a =a;
    this.b =b;
    console.log(eval('this.a + this.b'));
};

var y = new f(3,5);
console.log(y.valueOf);
console.log(eval());
