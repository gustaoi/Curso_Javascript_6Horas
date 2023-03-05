// APRENDENDO ARRAY

/* 
Array é uma maneira de armazenar varios valores em uma única variavel

const lista = [arroz, feijão, macarrão, ovos]

lista[0] = arroz
lista[1] = feijão
*/

const lista = []; // ou const lista = new array(arroz, ...)

lista[0] = 'arroz';

//console.log(lista)

lista.push = 'feijão'

console.log(lista)

const pessoa = ['joão', 'gustavo', 20] // array ou matriz

const pessoa1 = {nome:'joão', sobrenome:'Gustavo', idade:20} // objetos

// Descobrir se uma variavel é um array 

Array.isArray(pessoa); // return true or false

// Métodos para arrays

pessoa.pop(); // remove o ultimo dado do array 
pessoa.shift(); // remove o promeiro dado do array
pessoa.push('adcionei com push'); // adciona um dado novo

document.getElementById('text').innerHTML = pessoa.join(' | ');