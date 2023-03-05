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

const pessoa = ['joão', 'gustavo', 'negro', 'alto', 20] // array ou matriz

const pessoa1 = {nome:'joão', sobrenome:'Gustavo', idade:20} // objetos

// Descobrir se uma variavel é um array 

Array.isArray(pessoa); // return true or false

// Métodos para arrays

pessoa.pop(); // remove o ultimo dado do array 

pessoa.shift(); // remove o promeiro dado do array

pessoa.push('adcionei com push'); // adciona um dado novo no ultimo valor

pessoa.unshift('adcionei unshift') // adciona um dado no primeiro lugar

delete pessoa[1]; // deleta o primeiro dado e coloca como undefined

pessoa.splice(2,1,'item adcionado via', 'splice') /* adciona mais items 
começando em um lugar especifico */


document.getElementById('text').innerHTML = pessoa.join(' | ');

// Juntar arrays
const lista1 = ['doces', 'pipoca', 'chocolate', ];

const lista2 = ['verdura', 'salada', 'legumes',]

const lista3 = ['ARRAYS JUNTAS']

const listaCompleta = lista2.concat(lista1, lista3);

document.getElementById('text1').innerHTML = listaCompleta.join(' - ');

// Cortar arrays

const comidas = [
 'coxinha',
 'pizza',
 'Donuts',
 'picles',
 'uva',
 'alface',
 'salsisha'
]
const saldavel = comidas.slice(3, 6);

// Mostrar os itens em ordem alfabetica e reverse

saldavel.sort() //  Ordem Alfabetica

saldavel.reverse() // Reverso

document.getElementById('text2').innerHTML = saldavel.join(' - ');

// Ordenar numeros

const numeros = [40,55,13,10,42,1,100,9]

numeros.sort(); // Ordena em ordem alfabetica | 1,10,100,13,40,42,55,9

numeros.sort(function(a,b) {return a - b}) // ordena em ordem numerica |  1,9,10,13...

// Pegar o maior numero

function maiorNumero(array) {
    return Math.max.apply(null, array)
}

maiorNumero(numeros) // return 100

// Menor 
function menorNumero(array) {
    return Math.min.apply(null, array)
}

menorNumero(numeros) // return 1