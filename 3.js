/**
 * function statement and expressions
 */


 // function expression ::: anything we do that produces a result (or maybe evaluate things!) is an expression
 var whatIsYourName = function(name) {
    switch (name) {
        case 'mojtaba':
            return 'Pesari ke mojtaba'
        case 'mahshid':
            return 'Doxtari ke mahshid'
        default:
            return 'Amu nemidunam chi hasti!'
    }
 }


 // function declaration
function whatIsYourName_ (name) {
    return name
}

console.log(whatIsYourName('mahshid'))

// what about the statement???! 
/**
 * if-else is an statement. They do things, but, they do not produce immediate results (or let's say
 * that they don't immendiately evaluate to something or return something)
 * for instance if you check an if-else statement in the console, it will return an undefined
 */