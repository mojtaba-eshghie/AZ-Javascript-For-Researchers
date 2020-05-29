var names = ['mojtaba', 'mahshid', 'mahan']
var years = new Array(1993, 1992, 1989)

console.log(years[0].length)
console.log(years.length)

names[1] = 'ararat'
names[100] = 'amooooyi'
console.log(names)

names.push('mohammad')
names.unshift('mr. zero')
//use the array like an stack using these two:
names.push('poped!')
names.pop()
//use the array like a queue by these:
names.shift()
console.log(names)

console.log(names.indexOf('mohammad'))