// Aprendendo Variáveis

/* 
-> var
-> let
-> const
*/

var pote = 'bombom';
//* alert(pote)

//

var a = 5;
var b = 10;
var c = a + b;
//* alert(c);

// OU

// declaração de variaves
var a,b,c;

// Atribuição dos valores
a = 5;
b = 10;
c = a + b;
//* alert(c);

//

var nome, sobrenome, nomeCompleto, idade, pessoa;

nome = 'João';

sobrenome = 'Gustavo';

nomeCompleto = nome + ' ' + sobrenome;

idade = 20;

//* pessoa = idade + ' ' + nomeCompleto;

//* document.getElementById('text').innerHTML = pessoa;

// Uso do let / Ele não pode ser redeclarada

let name = 'joao'
//* let name = 'lucas'

// Ele é de escopo especifico diferente do var que é global

let x = 10; // aqui é 10

{
    let x = 2; // aqui é 2
}

//* window.document.querySelector('#texto').innerHTML = x;

// Já o const é 

