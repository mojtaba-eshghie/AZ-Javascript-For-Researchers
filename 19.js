/**
 * Destructuring
*/

//ES5
var mojtaba = ['mojtaba', 27];
var name = mojtaba[0];
var age = mojtaba[1];

//ES6
const [name2, age2] = ['mojtaba', 27];
const [name3, age3] = mojtaba;
console.log(name3)

// this also works with objects:
const myObject = {
    'his_name':'mojtaba',
    'his_age':27
}
const {his_name, his_age} = myObject;
console.log(his_age);
