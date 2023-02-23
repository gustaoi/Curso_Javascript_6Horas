// APRENDENDO OBJECT

const carro = {
    marca:'ford',
    modelo: 'ka',
    ano: 2015,
    placa: 'ABC-1234',
    buzina: function () { alert('biiiiiiiiii') }, //  Metodos
    completo:function () {
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`
    }
};

console.log(carro.marca) // ou console.log(carro['marca'])

carro.buzina() // Acionando o metodo
alert(carro.completo())


