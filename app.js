function row(a){
   document.getElementById('screen').value += a
}

function eq(){
    var exp = document.getElementById('screen')
    exp.value = eval(exp.value)
}

function clr(){
    document.getElementById('screen').value = ''
}

function clrs() {
    var exp = document.getElementById('screen');
    var currentValue = exp.value;

    var lastChar = currentValue[currentValue.length - 1];
    if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
        exp.value = currentValue.slice(0, -1);
    } else {
        exp.value = currentValue.substring(0, currentValue.length - 1);
    }
}
