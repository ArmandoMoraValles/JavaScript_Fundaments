// ** METODOS DE STRING ** //

const fullName = 'Armado Mora';

// ** METODOS DE STRING BASICOS

console.log(fullName); //Armando Mora 

// Devuelve el valor numerico del numero de caracteres que contiene el string
console.log(fullName.length);//11

// Devuelve el valor numerico del index en el que inicia el string pasado como parametro
console.log(fullName.indexOf("Mora"));//7

//Devuelve un valor booleano indicando si el string contiene o no el string pasado como parametro 
console.log(fullName.includes("Mora"));//true
console.log(fullName.includes("Valles"));//false

/* Los metodos de string que no necesitan parametros 
como el metodo length son considerados propiedades */

// * QUITAR ESPACIOS EN BLANCO A UN STRING
const blankSpace = "    Hola     ";

// Devuelve un string con los espacios en blanco eliminados al inicio
console.log(blankSpace.trimStart());//Hola     

// Devuelve un strin con los espacios en blanco eliminados al final
console.log(blankSpace.trimEnd());//    Hola

// Devuelve un string con los espacios en blanco eliminados tanto al inicio como al final del string
console.log(blankSpace.trim());//Hola

// Se pueden utilizar los metodos en forma encadenada a esta accion se le conoce como chaining
console.log(blankSpace.trimStart().trimEnd());//Hola

// *REMPLAZAR SECCIONES DE UN STRING
const productReplace = "Monitor 20 pulgadas";

console.log(productReplace);//Monitor 20 pulgadas;

// La funcion replace recibe dos parametros el primero es la palabra a remplazar, el segundo es la palabra con la que se remplazara
// Devuelve un string con la palabra remplazada
console.log(productReplace.replace('pulgadas', '"'));//Monitor 20 "

// *CORTAR UN STRING
const sliceString = "Armando Mora Valles";

// La funcion slice recibe dos parametros el primero es el index donde iniciara a cortar y el segundo donde dejara de cortar
console.log(sliceString.slice(7,12));//Mora

//Puede recibir solo un numero no es obligatoria mandar ambos parametros
console.log(sliceString.slice(7));//Mora Valles

//Si el primer numero es mayor que el segundo, no se realizara ninguna accion
console.log(sliceString.slice(9,2));

// ALTERNATIVA AL USO DE SLICE
// Funciona de la misma manera que slice
console.log(sliceString.substring(7,12));//Mora

// Con la diferencia de que es mas inteligente, si el primer numero es mayor que el segundo, va intercambiarlos y realizar el corte 
console.log(sliceString.substring(9,2));//mando M

// * CORTAR SOLO UN CARACTER DE UN STRING

// Se puede cortar un solo caracter haciendo uso de el metodo slice o substring pero una mejor alternativa es el metodo charAt
console.log(sliceString.charAt(0));//A


// * REPETIR UNA CADENA DE TEXTO
const text = "Este es un mensaje";

// La funcion recibe como parametro el numero de veces que el string se va repetir
console.log(text.repeat(2));//Este es un mensajeEste es un mensaje

// Si se le pasa un numero decimal, siempre se redondeara hacia abajo
console.log(text.repeat(2.9));//Este es un mensajeEste es un mensaje

//* DIVIDIR UN STRING
const longText = "Hola_MI_ciudad_ES_ARMANDO";

// La funcion recibe como parametro el caracter o conjunto de caracteres con el que devidira el string, esta funcion regresa un arreglo con el string separado
console.log(longText.split("_"));//[ 'Hola', 'MI', 'ciudad', 'ES', 'ARMANDO' ]

// * CONVERTIR A MAYUSCULAS Y MINUSCULAS
const lowerLetters = "este texto fue declarado con minusculas";
const upperLetters = "ESTE TEXTO FUE DECLARADO CON MAYUSCULAS";

console.log(lowerLetters.toUpperCase());
console.log(upperLetters.toLowerCase());

// * CONVERTIR UN NUMERO A STRING

//La variable number contiene un valor numerico con el cual se pueden realizar operaciones
const number = 888; 

//Aplicando la funcion toString convertira ese valor numerico a string
console.log(number.toString());//888
//No se pueden realizar operaciones como suma resta multiplicacion, con numeros en forma de string 