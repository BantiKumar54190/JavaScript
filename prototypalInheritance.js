var circle = {
    radius : 10
};

circle.area = function()
{
   return 3.14*this.radius*this.radius; 
} 

circle.perimeter = function()
{
    return 2*3.14*this.radius;
}

//cloning the object circle

var circle1 = Object.create(circle);
circle1.radius=20;
console.log(circle.area());
console.log(circle.radius);
console.log(circle.perimeter()) ;

console.log(circle1.area());
console.log(circle1.radius);
console.log(circle1.perimeter()) ;
