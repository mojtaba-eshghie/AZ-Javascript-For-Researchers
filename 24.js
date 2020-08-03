/**
 * Map
 * This is a new data structure. 
*/

const studentLevels = new Map()
studentLevels.set('mojtaba', 'grad')
studentLevels.set('leyla', 'grad')
studentLevels.set('ali', 'ugrad') //aka undergraduate

console.log(studentLevels.get('ali'))
console.log(studentLevels.size)

//for deleting first check 
if (studentLevels.has('ali')) {
    studentLevels.delete('ali')
}

//clearing everything
//studentLevels.clear();

//iterating over key:value pairs
studentLevels.forEach((key, value) => {
    console.log(`${key} = ${value}`)
});



for (let pair_as_array of studentLevels) {
    console.log(pair_as_array)
}

for (let entry of studentLevels.entries()) {
    console.log(entry)
}

// a more professional approach
for (let [key, value] of studentLevels.entries()) {
    console.log(`${key} ::: ${value}`)
}
