/**
 * Bind, call, apply
*/

var mojtaba = {
    name: 'mojtaba', 
    age: 26, 
    job: 'programmer',
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good "+ timeOfDay +" ladies and gentlemen")
            console.log("I am a " + this.name)
        } else {
            console.log("What's up!? Ain't this a nice " + timeOfDay + "???")
            console.log("I'm a " + this.name)
        }
    }
}

var leyla = {
    name: 'leyla',
    age: 31,
    job: 'engineer',
    presentation: mojtaba.presentation //what other way do I have for doing this?
}


mojtaba.presentation("formal", "evening")
leyla.presentation("informal", "morning")



/**
 * Method borrowing:
 * Instead of giving leyla a function that is the same thing as mojtaba's 
 * function, I could use 'call' method to invoke mojtaba's method with 
 * leyla's "this" keyword:
*/

console.log("-----------------------------")
mojtaba.presentation.call(leyla, "formal", "Night!")


/**
 * There are similar methods:
 * apply:
 * this one accepts the areguments to the function as an array 
*/
console.log("****************************")
mojtaba.presentation.apply(leyla, ["formal", "lunch!"])


/**
 * bind method:
 * Creating functions that are bound to specific parameters:
 * This is good when we have a general-purpose function, and we wanna use it
 * for a particular use-case or situation with a particular set of configuraions/parameters
 * therefore, we bind it so that we can call it whenever we want without worrying
 * about how the areguments are going to be passed to it:
*/

// so, here we want to config the function so that it will automatically be
// a friendly function (not a formal one)
console.log("^^^^^^^^^^^^^^^^^^^^^^^")
var myPresetFunction = mojtaba.presentation.bind(leyla, "friendly")
myPresetFunction("Evening???")