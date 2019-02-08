var factorialResult = document.querySelector('.result');
var input = document.querySelector('.input-field');
var submit = document.querySelector('.submit');
var span = document.querySelector('span');


submit.addEventListener('click', function() {
    var result = 1;
    for (var i=1; i<=input.value; i++) {
        result = result * i;
    }
    factorialResult.innerHTML = `<span class="span result-active">${result}</span>`;
    span.classList.add('result-active');
});

