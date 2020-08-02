/**
 * Rest params
 * rest parameters do the exact opposite of expanding operators
*/


//es5
function myFunction() {
    console.log(arguments) // special varible that we have access to in all of our funcitons
    // arguments is *not* an array::: we say that it is array-like strucure,
    // yet it is not an array (it does not have array prototype when you log
    // it in browser console, rather it has object prototype.)
    // so when you want to use it as an array you need to convert it:
    console.log(Array.from(arguments))
    for (const element of Array.from(arguments)) {
        console.log(element)
    }
}

myFunction()
myFunction(1, 2, 3)




///////////////////// es6 /////////////////////
function areFullAge(...years) {
    //... which is the rest parameter allows us to represent an indefinite
    // number of arguments as an array! 
    console.log(years) 
    years.forEach(elem => console.log(elem >= 18));
}

areFullAge(18, 21, 50, 17, 3, 40)



// Cutting array (slicing at a certain index): es5:
function isFullAge5() {
    var argsArray = Array.prototype.slice.call(arguments, 1)
    console.log(argsArray)
}

isFullAge5(1, 2, 3, 4)