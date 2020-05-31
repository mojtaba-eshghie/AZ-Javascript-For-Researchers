/**
 * Here we will use the following to create objects: 
* Object.create 
*/

var personProto = {
    calculate: function() {
        /**
         * This object (this is actually supposed to be an object prototype) does not
         * have any constructor, so we will not define its member variables here, rather we 
         * will add the yearOfBirth variable to the instantiated object when we want to use 
         * it (look at line 27)
         * Remember: this is an alternative approach to creating objects, the basic way is 
         * demonstrated in 5.js which is by using an object constructor 
         */
        console.log(2020 - this.yearOfBirth)
    }
}

//let's pass in the prototype of the person (personProto) to the Object.create 
var mojtaba = Object.create(personProto)
console.log(mojtaba)

//The following will not work, since personPoroto is not a "constructor", and
// it is rather a prototype
//var leyla = new personProto()
//console.log(leyla)

mojtaba.yearOfBirth = 1800
mojtaba.calculate()


/**
 * The other (and better way) way to use Object.create:
 */
var leyla = Object.create(personProto, {
    yearOfBirth: {
        value: 1990
    }
})

