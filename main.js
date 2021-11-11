var inputValue = document.getElementById('input-number');
var buttonClick = document.getElementById('clickButton');
var showMultiply = document.getElementById('showMultiply');

function printResult() {
    let number = Number(inputValue.value);
    let output = '';

         if(number == 0) {
            return showMultiply.innerHTML = '0'
         }
        for(let i =0; i<=12;i++) {
            output += '<p>'
            output += number + ' x ' + i + ' = ' + (number * i)
            output += '</p>'
        }

        showMultiply.innerHTML = output;
}

buttonClick.addEventListener('click', printResult)