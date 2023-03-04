/* APRENDENDO EVENTS 

Eventos são ações disparadas pelas interações dos usuários das páginas

onclick -> Clique
ondblclick -> Clique Duplo
onmouseover -> Mouse sobre
onmouseout -> Mouse movido para fora do elemento
...
*/

// Evento de um click
function clique() {
    // alert('Clicou');
    document.body.style.background = 'lightcoral'
}

// Evento de Dois Clicks
function doisClique() {
    alert('Evento de clique duplo');
}

// Evento de mouse sobre o elemento
function sobre() {
    // alert('muda a cor')
    let div = document.getElementById('box');
    div.innerHTML = 'O mouse sobre o Elemento';
    div.style.background = 'lightsalmon'
}

// Evento de mouse saiu do Elemento
function saiu() {
    let div = document.getElementById('box')
    div.innerHTML = 'O mouse saiu do Elemento';
    div.style.background = 'lightseagreen'
}

// Evento de movimento do mouse sobre o Elemento
function mover() {
    let p = document.getElementById('text')
    p.innerHTML = 'O mouse moveu'
}

// Evento de Segurar o click do mouse
function pressionou() {
    let div = document.getElementById('box')
    div.innerHTML = 'Pressionando o mouse';
}

// Evento de soltar o mouse
function soltou() {
    let div = document.getElementById('box')
    div.innerHTML = 'Parou de pressionar';
}

// Evento de foco no Elemento
function foco() {
    let p = document.getElementById('text')
    p.innerHTML = 'O input está focado'
}

// Evento quando mudar o conteudo do Elemento
function mudar() {
    let p = document.getElementById('text');

    p.innerHTML = 'O input foi modificado';
}

// Evento de perder o foco do Elemento
function semFoco() {
    let p = document.getElementById('text2')
    p.innerHTML = 'O input foi desfocado'
}

// Evento de tecla pressionada
function teclaPressionada() {
    let input = document.getElementById('itexto').value;
    // console.log(input);
}

// Evento onkeydown é acionado quando a tecla é clicada

// Evento onkeyup é acionada quando a tecla é solta
function solta() {
    let input = document.getElementById('itexto').value;
    console.log(input);
}

// Evento onload é acionada quando a página é carregada
function carregar() {
    alert('A página foi carregada ou recarregada')
}

// Evento onsize é acionado quando o tamanho da página foi modificado