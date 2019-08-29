var volumeFunc = function(length) {
    return function  surfaceArea (breadth) {
        return function height  (height) {
            return height*breadth*length;
        }
    }
};

var volumeArrowFunc = length => breadth => height => length * breadth * height;

console.log(volumeFunc(2)(3)(4));
console.log(volumeArrowFunc(2)(3)(4));