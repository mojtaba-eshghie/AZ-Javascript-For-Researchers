/**
 * Strings in ES6
*/

let firstName = 'Mojtaba'
let lastName = 'Eshghie'

const yearOfBirth = 1990

function calcAge(year) {
    return 2020 - year
}


// Let's talk about 'template literals'
console.log(`My name is ${firstName} ${lastName}, and I am ${calcAge(1993)} years old!`)



// Some of new string methods
console.log(firstName.startsWith('M'))
console.log(lastName.endsWith('a'))
console.log(firstName.includes('j'))
console.log(firstName.repeat(3))