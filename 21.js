/**
 * The spread operator
*/


var numbers = [1, 2, 3, 4]

function adder(a, b, c, d) {
    return a + b + c + d
}


//es5:
// we would have to specify  the this variable as the first argument
var res = adder.apply(null, numbers) 
console.log(res)

//es6:
//expanding in es6:
var res_es6 = adder(...numbers)
console.log(res_es6)




const myFamily = ['Ali', 'Hasan', 'Omar']
const myFamily2 = ['Mom', 'Pop']
const wholeFamily = [...myFamily, ...myFamily2]
console.log(wholeFamily)




// let's use the abovementioned facility to list all of the tags here:
var h1NodeList = document.querySelectorAll('h1')
const h1Array = Array.from(h1NodeList)

var boxNodeList = document.querySelectorAll('.box')
const boxArray = Array.from(boxNodeList)

var allInnerTags = [...h1Array, ...boxArray]
console.log(allInnerTags)