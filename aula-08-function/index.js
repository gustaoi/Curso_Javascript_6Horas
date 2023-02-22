// Aprendendo Functions

// FUNÇÃO DE SOMA
function soma(valor1,valor2) {
    return valor1 + valor2
}

var total = soma(20,10)

document.getElementById('text').innerHTML = total

// FUNÇÃO DE COTAÇÃO DO DOLAR
function realParaDolar(real,cotacaoDoDolar) {
    return real * cotacaoDoDolar;
}

var valorReal = 7.5;
var cotacao = 5.8;

var realDolar = realParaDolar(valorReal,cotacao);

document.getElementById('text').innerHTML = 'O valor em real é R$: ' + valorReal + 'O valor em dolar é U$: ' + realDolar;

// FUNÇÃO POR ONCLICK
function alertHello(params) {
    alert('Olá Pessoal')
}

// FUNÇÃO POR VARIAVEIS
function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77)

alert(`A temperatura é de ${x} graus Celsius`)