/**
 * primitives vs objects
*/

var a = 23;
var b = a;
a = 100
console.log(a)
console.log(b)


var obj1 = {
    name: 'Mojtaba',
    age: 26
}

var obj2 = obj1;
obj1.age = 30
console.log(obj1.age)
console.log(obj2.age)