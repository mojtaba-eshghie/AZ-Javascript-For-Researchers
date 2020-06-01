/**
 * Closures:
 * An inner function has always access to the variables and parameters of its
 * outter function, even after its outter function has returned! (watch below)
*/

function outter(param) {
    var outterFunctionVariable = "Hello "
    return function() {
        return outterFunctionVariable + param
    }
}

console.log(outter("world!")())