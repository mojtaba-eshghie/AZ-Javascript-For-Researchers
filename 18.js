/**
 * arrow functions, this keyword, and prototype!
*/

function Person(name) {
    this.name = name
}

//ES5
// this is going to be a function recieving an array of friends
/*
Person.prototype.myFriends5 = function(friends) {
    // Functionality: just tell that this particular person is friends with 
    // everybody!
    
    var thisGuysFriends = friends.map(function(element) {
        return this.name + ' is friends with ' + element
    })
    return thisGuysFriends
}

var friends = ['Hamid', 'Jack', 'Bill']
var mojtaba = new Person('Mojtaba')
console.log(mojtaba.myFriends5(friends))
*/

//Not working??? We have a workaround according to 17.js!










//ES5
// this is going to be a function recieving an array of friends

Person.prototype.myFriends5 = function(friends) {
    // Functionality: just tell that this particular person is friends with 
    // everybody!
    var self = this
    var thisGuysFriends = friends.map(function(element) {
        return self.name + ' is friends with ' + element
    })
    return thisGuysFriends
}

var friends = ['Hamid', 'Jack', 'Bill']
var mojtaba = new Person('Mojtaba')
// This definitely works:
console.log('es5: ')
console.log(mojtaba.myFriends5(friends))
console.log('-----------------------------------')





// Let's have the ES6 workaround!

Person.prototype.myFriends6 = function(friends) {
    // Functionality: just tell that this particular person is friends with 
    // everybody!
    
    var thisGuysFriends = friends.map((element) => {
        return this.name + ' is friends with ' + element
    })
    return thisGuysFriends
}

var friends = ['Hamid', 'Jack', 'Bill']
var mojtaba = new Person('Mojtaba')
// This definitely works as well!
console.log(mojtaba.myFriends6(friends))


