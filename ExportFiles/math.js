// **Exportar funciones utilizando un objeto

function add(x,y){
    return x+y;
}

function substract(x1,x2) {
    return x1*x2;
}

//Funciona de la misma manera con una funcion de flecha
function divide(x1,x2) {
    if(x2 === 0) return {err: 'Thats Numbers Are Not Divisble'} 
    return x1/x2
}

const divide2 = (a,b) => {
    if(b === 0) return console.log('Thats Numbers Are Not Divisible');
    return a/b;
}

exports.add = add;
exports.substract = substract;
exports.divide = divide;
exports.divide2 = divide2;
