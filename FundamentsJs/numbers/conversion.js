// ** CONVERTIR NUMEROS A STRING ** //

let number1 = '5';
let number2 = '5.67';
let number3 = 'Cinco';
let number4 = 5;


// Convertir un string entero a numero
console.log(typeof number1);//string
number1 = Number.parseInt(number1)
console.log(typeof number1);//number

console.log('-----------------------------');

// Convertir un string con u flotante a float
console.log(typeof number2);//string
number2 = Number.parseFloat(number2) // Si en este caso se utiliza parseInt la funcion regresara un entero
console.log(typeof number2);//number

// Revisar si un numero es entero

// Sin usar la funcion directamente
const number = 3.32
const result = number - Number.parseInt(number)
console.log( number === 0? 'Es entero' : 'No es entero' );//No es entero

console.log(Number.isInteger(number));//false