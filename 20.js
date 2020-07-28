/**
 * arrays in es6
*/

// boxes will be a nodelist, after retrieving it, we will need to convert
// it to an array (because for instance we want to use the foreach on it)
const boxes = document.querySelectorAll(".box")


// es5:
var boxesArray = Array.prototype.slice.call(boxes);
boxesArray.forEach(function(current_element) {
    current_element.style.backgroundColor = "dodgerblue";
});



// es6:
const boxesArrayES6 = Array.from(boxes) // transform nodelist to an array
boxesArrayES6.forEach((current_element) => {
    current_element.style.backgroundColor = "green";
});



/**
 * the problem with forEach and map functions (when used for looping) is that
 * they do not support continue and break statements. 
*/


// es5 
for (var i = 0; i < boxesArray.length; i++) {
    // let's assume that we want to skip the blue box in the html 
    if (boxesArray[i].className === "box blue") {
        continue;
    }
    boxesArray[i].textContent = "This text is changed";
}


// es6
for (const current_element of boxesArrayES6) {
    if (current_element.className == "box orange") {
        continue;
    }
    current_element.textContent = "&&& 777 &&&";
}




// There are 2 new array methods that help us find elements in array
// es5
var ages = [12, 22, 34, 50, 72, 4, 18]
var result_array = ages.map((current_element) => {
    //let's check if the person has reached legal age
    return current_element >= 18; // returns true / false
});
console.log(ages[result_array.indexOf(true)]) // return the first person who has a legal age


// es6
var index_of_first_legal_age = ages.findIndex(current_element => current_element >= 18);
console.log(index_of_first_legal_age);