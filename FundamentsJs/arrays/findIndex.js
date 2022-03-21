// ** METODO FIND INDEX ** //

/*
    Devuelve el index del primer elemento que cumpla con las condiciones indicadas
    en el callback que se pasa como paramtro del metodo findindex
*/

const numbers = [2,4,6,8,10];

const index = numbers.findIndex(element => element === 10)
console.log(index);

// Como otros metodos recibe un callback como parametro
