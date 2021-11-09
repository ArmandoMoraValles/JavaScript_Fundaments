// **Exportar un ojeto

// Con esta forma se pueden importar las funciones sin la necesidad de tener las funciones dentro de un objeto como metodos

function add(x,y){
    return x + y;
}

function substract(x1,x2) {
    return x1 - x2;
}

//Funciona de la misma manera con una funcion de flecha
function divide(x1,x2) {
    if(x2 === 0) return {err: 'Thats Numbers Are Not Divisble'} 
    return x1 / x2
}

const divide2 = (a,b) => {
    if(b === 0) return console.log('Thats Numbers Are Not Divisible');
    return a / b;
}

const math = {};

math.add = add;
math.substract = substract;
math.divide = divide;

module.exports = math