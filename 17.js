/**
 * Arrow functions + this keyword
 * Arrow functions do not have a 'this' keyword. They simply inherit the 
 * this keyword of the function they are written in ::: lexical this
*/

// es5
var box5 = {
    color: 'green',
    position: '1',
    clickMe: function() {
        document.querySelector('.green')
            .addEventListener('click', function() {
                alert("The color of the box is " + this.color)
            })
    }
}

// The following will fail to return the color of the box,
// since the this keyword here (in a regular function call not a method call)
// will always point to the window object not the function/object calling the function
//box5.clickMe()



// Let's do it the correct way!
var box6 = {
    color: 'green',
    position: '1',
    clickMe: function() {
        var self = this
        document.querySelector('.green')
            .addEventListener('click', function() {
                alert("The color of the box is " + self.color)
            })
    }
}

// This will work defintely!
// box6.clickMe()





// Now, let's do it the es6 way!
// es6
var box7 = {
    color: 'green',
    position: '1',
    clickMe: function() {
        
        document.querySelector('.green')
            .addEventListener('click', () => {
                alert("The color of the box is " + this.color)
            })
    }
}

// This will also defintely work!
// box7.clickMe()





// Now, let's ruin things with making the clickMe function an arrow function
// that forces it to inherit the 'this' from window object (and when we use
// the this inside the inner arrow function it will refer to the window this!)
var box8 = {
    color: 'green',
    position: '1',
    clickMe: () => {
        document.querySelector('.green')
            .addEventListener('click', () => {
                alert("The color of the box is " + this.color)
            })
    }
}

box8.clickMe()