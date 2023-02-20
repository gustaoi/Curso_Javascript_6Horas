/* 
Aprendeno Operadores

1) Operadores Aritméticos (matemática)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

São Usados os Sinais: + - * / = == === ++ -- += -= && || ! ...
*/

// 1) Operadores Aritméticos ( +  -  *  /  )

var num1, num2, soma, sub, multi, incremento;

num1 = 10;
num2 = 20;

// Somente para numbers

soma = num1 + num2;
// alert(soma) / 30

sub = num1 - num2;
// alert(sub) / 10

multi = num1 * num2;
// alert(multi) / 200

divi = num1 / num2;
// alert(divi) / 0,5 

/* 2) Operadore de Atribuição ( ++ -- += -= *= /= ) */

// Incremento

// alert(num1) / 10

incremento = ++num1; // incremento = --num1;
alert('O incremento adiciona ao valor + ou - 1 e salva na base: ' + num1)

// alert(num1) / Passa a ser  11

// Incremneto de soma, sub, div, multi

num1 += num2; // num1 -= num2 - 10
// alert(num1) / 30

num1 *= num2; // num1 /= num2 - 0,5
// alert(num1) / 200

/* 3) Operadores de Sequência ( + com strings ) */

// Concatenação Junta duas variaveis'String'

var palavra1, palavra2, frase;

palavra1 = 'Cachorro ';
palavra2 = 'Quente';

frase = palavra1 + palavra2
// alert(frase) / Cachorro Quente

