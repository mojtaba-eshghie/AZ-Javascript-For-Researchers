/**
 * First class functions: passing functions as arguments
 * 
 * Functions are objects ::: you can do the same things with functions 
 * that we did with objects
 * A function is an instance of the Object type
 * A function behaves like any other object
 * A function can be stored inside a variable
 * A function can be passed to another function as the argument
 * We can "return" a function from another function
*/

var years = [1, 2, 3, 4, 5]

function arrayCalc(arr, fn){
    /**
     * what we want to do is that "fn" is a function that does 
     * an specific caculation (task) on an item, but we need this
     * calculation to be done over an array, so this function 
     * may just be taught as a wrapper!
     */
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        resultArr.push(fn(arr[i]))
    }
    return resultArr
}

function perItemCalculationFunction(item) {
    // just a dummy calculation for now:
    return item * 2
}

var output = arrayCalc(years, perItemCalculationFunction)
console.log(output)