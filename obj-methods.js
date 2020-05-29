/**
 * objects and methods!
 */

var mojtaba = {
    firstName: 'mojtaba', 
    lastName: 'eshghie',
    birthYear: 1993,
    family: ['mahshid', 'mahan', 'mohsen', 'shahin'],
    isMarried: false,
    giveAge: function(birthYear=this.birthYear) {
        var today = new Date()
        //var age = today.getFullYear() - this.birthYear
        var age = today.getFullYear() - birthYear
        return age
    }
 }

console.log(mojtaba.giveAge())
