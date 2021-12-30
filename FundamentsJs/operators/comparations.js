// ** COMPARACIONES ** //

let number1 = 5
let number2 = 6
let number3 = 4

// * Mayo o menor que
console.log(number1 > number2);//false
console.log(number1 > number3);//true

//* Igual que
/*
 = para asignacion
 == para comparacion
 === para comparacion estricta
 */

const stringNumber = '8';
const intNumber = 8;
console.log(number1 == number2);//false
console.log(stringNumber == intNumber);//true

// El estricto hace la distincion entre el tipo de dato y el valor, no solo el valor
console.log(stringNumber === intNumber);//false
console.log(Number.parseInt(stringNumber) === intNumber);//true
// Como buena practica siempre utilizar el comparador estricto

//* Diferente de
number1 = 8
number2 = 10
number3 = '8'
console.log(number1 != number2);//true
console.log(number1 != number3);//false

// Este comparador tiene su version estrica
console.log(number1 !== number3);//true
// Es verdad que son diferentes al no tener el mismo tipo de dato
console.log(number1 !== Number.parseInt(number3));//false
// El strig se convierte a entero y el resultado dice que es falso que sean diferentes