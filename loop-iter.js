/**
 * loops and iteration! 
 */

for (var i = 0; i < 10; i += 2) {
    console.log(i)
}

var names = ['mojtaba', 'mahshid', 'mahan']

function giveMeAge(year) {
    console.log(this);
    function nestedFunction(){
        console.log('============================')
        console.log(this)
    }
    nestedFunction()
}

giveMeAge(1000)
