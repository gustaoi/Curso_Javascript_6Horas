// Laço de Repetição for

/* for (let i = 0; i <= 100; i++) {
    document.getElementById('text').innerHTML += i + ' - '     
} */

var ano = new Date().getFullYear()

for (let i = ano; i >= 1900; i--) {
    document.getElementById("iano").innerHTML += "<option value='" + i +"'> "+ i +" </option>"
}

const carros = ['gol', 'ferrari', 'bmw', 'tesla', 'camaro', 'porshe']

for (let index = 0; index < carros.length; index++) {
    const element = carros[index];
    
    document.getElementById('text1').innerHTML += element + ' - '
}