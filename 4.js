/**
 * Everything is an object, except: numbers, str, booleans, undefined, Null
 * instances of objs: dates, arrays, ... 
 * 
 * Object orientedness
 * JS inhereintence works by "prototypes"
 */

/*
var Mojtaba = {
    name: 'Mojtaba', 
    yearOfBirth: 1994,
    job: 'unemployed'
}
*/
var ALivingBeing = function(name, yearOfBirth) {
    //let's skip adding the isAlive part intentionally so that we can 
    //try to add it later
    this.isAlive = true
    this.name = name
    this.yearOfBirth = yearOfBirth
}

var Animal = function (isInZoo) {
    this.isInZoo = isInZoo
}

var Person = function (name, yearOfBirth, job) {
    /**
     * This is the blueprint (constructor of my object)
     */
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
    this.calculateAge = function() {
        var today = new Date()
        var age = today.getFullYear() - this.yearOfBirth
        return age 
    }
}

// is this kind of inheretinance working in js???
//Animal.prototype = ALivingBeing
//Person.prototype = ALivingBeing

// let's instantiate a new object here!
// My idea: we create objects from classes, by the constructors (blueprints!)
var shahin = new Person('shahin', 1980, 'teacher')
console.log(shahin.calculateAge())


// another object!
var Leyli = new Person('Leyli', 1994, 'Researcher')
console.log(Leyli.calculateAge())

// let's create an animal 
var tiger = new Animal()
console.log(tiger.isAlive) //seems that it does not!


//let's do something with the class that all of these 
Person.prototype.lastName = "No last name!"
/**
 * The following thing would not work:
 * Person.lastName = "No last name!"
 */


// use console.info in the browser console to get the real deal of information about the object and its prototype
console.info(Leyli)

