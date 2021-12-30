// ** CREACION Y COMPARACION DE BOOLEANS ** //

/* 

LA COMPARACION ENTRE BOOLEANS ES ESTRICTA POR LO QUE NO ES NECESARIO 
UTILIZAR EL COMPARADOR ESTRICTO COMO SI LO ES A LA HORA DE COMPARAR
OTROS TIPOS DE DATOS PRIMITIVOS

*/

const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.clear();

console.log(boolean1);//true
console.log(boolean2);//true

// A pesar de no usar el comparador estricto, el resultado es falso
console.log(boolean1 == boolean3); //false

// Otra forma de declarar un boolean

const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);

// Este tipo de declaraciones por lo general crean objetos
