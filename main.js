var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var minus = document.getElementById('minus');
var decimal = document.getElementById('decimal');
var plus = document.getElementById('plus');
var clear = document.getElementById('clear');
var equals = document.getElementById('equals');

var display = document.getElementById('display')

// Event Listeners

one.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('1');
})

two.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('2');
}) 

three.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('3');
}) 

four.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('4');
})

five.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('5');
})

six.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('6');
})

seven.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('7');
})

eight.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('8');
})

nine.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('9');
})

zero.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('0');
})

divide.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('/');
})

times.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('*');
})

minus.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('-');
})

decimal.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('.');
})

plus.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML + ('+');
})

clear.addEventListener('click', function(e){
    display.innerHTML=('');
})

equals.addEventListener('click', function(e){
    display.innerHTML = eval(display.innerHTML)
     });


