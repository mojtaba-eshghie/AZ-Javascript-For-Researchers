/**
 * blocks and IIFE's
*/
// this is an iife in es6
{
    // this block will be executed!
    const a = 1
    let b = 2
    var c = 3
}

// this will throw a ReferenceError
//console.log(a)


//this is an iife in es5
(
   function()  {
       console.log('something is executing in this es5 iife block')
   }
)()