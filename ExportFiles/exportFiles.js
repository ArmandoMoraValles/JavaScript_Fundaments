math = require('./math');
math2 = require('./math2');
math3 = require('./math3');
const {add} = require('./math3'); //Se puede importar solo una funcion en especifico utilizando la destructuracion de objetos

console.clear();
console.log(math); // { add: [Function: add], substract: [Function: substract], divide: [Function: divide] }
//Imprimer un objeto que muestra los metodos disponibles en la funcion math

// **Prueba math

console.log(math.add(3,3)); // 6
console.log(math.divide2(8,8)); // 1


// **Prueba math2


console.log(math2.add(1,2)); //3
console.log(math2.substract(4,3)); //1


// **Prueba math3

console.log(math3.add(8,5)); //13
console.log(add(5,6)); //11 //Usando la funcion importada con destructuracion de objetos