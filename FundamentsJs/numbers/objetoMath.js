// ** EL OBJETO MATH **//
// No necesita ser importado a que existe en el objeto global de Js (o ventana global)

// * El objeto global son funciones o variables que estan disponibles en cualquier lugar donde se ejecute js

// * Devuelve el valor de PI
console.log(Math.PI);  

// * Redondear el valor numerico pasado como parametro hacia su valor entero mas proximo
console.log(Math.round(2.4));//2
console.log(Math.round(2.5));//3

// * Redondear siempre hacia arriba
console.log(Math.ceil(2.1));//3

// * Redondear siempre hacia abajo
console.log(`Redonde hacia abajo ${Math.floor(2.9)}`); //2

// * Raiz cuadrada
console.log(Math.sqrt(4));//2

// * Valor absoluto
console.log(Math.abs(-5));//5

// * Potencia
// Esta funcion recibe dos parametros con valores numericos, el primero es el numero a elevar, el segundo es la potencia a la que se elevara
console.log(Math.pow(3,2));//9

// * Minimu
//Esta funcion recibe una serie de numeros y regresa el menor de todos ellos
console.log(Math.min(1,4,7,3,2));//1

// * Aleatorio
//Genera numeros decimales menores que uno
console.log(Math.random());

//Generaras numeros deciamales enteros
console.log(Math.floor(Math.random() * 30));//Valor aleatorio del 0 al 30
