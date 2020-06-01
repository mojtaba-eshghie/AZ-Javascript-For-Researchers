/**
 * Let's talk IIFE (immediately invoked function expressions)
*/

// Here is a function object!
var myRandomScoreFunction = (function () {
    var score = Math.random();
    console.log(score)
})


// But hey, we could invoke that piece of code without even naming it 
// and this way the variables inside its scope will just belong to it and
// not observable by outside scope ::: this way of defining and calling code is
// "immediately invoked function expressions":
(function () {
    var score = Math.random();
    console.log(score)
})()
// my experience: This does not work in nodejs (only browser)

//another example with the parameters:
(function (name) {
    console.log(name)
})("mojtaba")
