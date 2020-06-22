/**
 * Arrow functions
*/

const years = [1990, 1991, 1992, 1993]



function calcAge(year) {
    return 2020 - year
}

/* ES5 implementation:
const returnedValues = years.map((element) => {
    return calcAge(element);
})
*/

// A very ES6 implementation:
const returnedValues = years.map(element => 2020 - element)

console.log(returnedValues)


console.log(years.map(yearOfBirth => `${yearOfBirth} is received!`))

const calculatedAgesList = years.map(yearOfBirth => {
    const thisYear = new Date().getFullYear()
    return thisYear - yearOfBirth
})

console.log(calculatedAgesList)