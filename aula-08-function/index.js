// Aprendendo Functions

function soma(valor1,valor2) {
    return valor1 + valor2
}

var total = soma(20,10)

document.getElementById('text').innerHTML = total

function realParaDolar(real,cotacaoDoDolar) {
    return real * cotacaoDoDolar;
}

var valorReal = 7.5;
var cotacao = 5.8;

var realDolar = realParaDolar(valorReal,cotacao);

document.getElementById('text').innerHTML = 'O valor em real é R$: ' + valorReal + 'O valor em dolar é U$: ' + realDolar;