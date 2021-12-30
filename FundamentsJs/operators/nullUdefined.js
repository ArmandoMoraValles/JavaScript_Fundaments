// ** COMPARAR NULL Y UNDEFINED ** //

// * UNDEFINED

// La variable number esta declarada mas no inicializada
let number;

console.log(typeof number);//undefined
console.log(number);//undefined

// Por lo que al imprimir su valor y tipo es undefined

// * NULL

number2 = null; // null es mas bien un valor que se asigna a las variables
console.log(number2);//null
console.log(typeof number2);//object

// La especificacion de ECMA dice que si un valor es null, es un tipo de dato objeto

// * Comparando los tipos de valores

console.log(number == number2);//true
console.log(number === number2);//false

// Para el operador == los valores undefined y null son iguales 
// Para el operador === ls valores undefined y null son diferentes
// UN MOTIVO MAS PARA SIEMRE UTILIZAR EL COMPARADOR ESTRICTO