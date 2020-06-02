/**
 * ES6
 * let, const
 * variables defined with 'var' are function-scoped, and the ones defined 
 * with 'let' and 'const' are block-scoped
*/
var ES5Name = "mojtaba"
let ES6Name = "mojtaba"

const ES6ConstName = "mojtaba"




console.log("========= section 2 =========")

function demo1(boolParam) {
    if (boolParam === true) {
        var varOne = 1
    }
    console.log(varOne)
}

function demo2(boolParam) {
    if (boolParam === true) {
        let varOne = 1
    }
    console.log(varOne)
}

// this will be fine!
demo1(true)

// this will throw a ReferenceError since let defines varOne just inside the block of
// the if statement
//demo2(true)


// A very interesting use-case for let keyword is here:

let i = 13

for (let i = 0; i < 5; i++) {
    // print the last value for i
    if (i === 4) {
        console.log('--------------------')
        console.log(i)
    }
}

console.log(i)
// as you see the i's do not interfere this way, whereas, if we had defined them
// using them var keyword, they would have.