/** 
 * Functions that return function!
*/

function returnPreferedJob(personInformation){
    function nurse() {
        /**
         * Just return a dummy value
         */
        return true
    }
    return nurse
}

function returnAJob(personInformation) {
    return function() {
        /**
         * Just return a dummy value
         */
        return false
    }
}

console.log(returnPreferedJob("Mojtaba")())
console.log(returnAJob("Mojtaba")())

