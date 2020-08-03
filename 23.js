/**
 * Default parameters
*/


// default parameters in es5:
// This is a function constructor
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    
    //we can set default parameter values like this:
    if (lastName === undefined) {
        lastName = 'smith'
    }
    if(nationality === undefined) {
        nationality = 'swedish'
    }
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('john', 1990) // we can leave some of the func params, they will be constructed 'undefined'
console.log(john)




// default parameters in es6:
function GreenlandPerson(firstName, yearOfBirth, lastName='Greenlander', nationality='greenland') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var sara = new GreenlandPerson('sara', 1993)
console.log(sara)