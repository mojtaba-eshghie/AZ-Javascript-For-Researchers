/**
 * Let's play with the constructors
 */

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var p1 = new Person("mojtaba", "eshghie", 22, "black")
console.log(p1)