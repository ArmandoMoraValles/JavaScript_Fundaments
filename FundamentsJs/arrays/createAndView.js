// ** CREACION Y VISUALIZACION DE UN ARREGLO **//
console.clear();
// Los arreglos sirven para agrupar elementos del mismo tipo

// Aunque en javaScript no se limitan a un solo tipo de objeto

const numbers = [3,6,9,12];
const array = [123, {data: 'hola'}, [2,4,6,[2,7,2,'Hola']]];
const array2 =  new Array('Hola','Mi','Amigo');//Forma poco habitual de declarar arreglos

// En los objetos se tiene una llave y valor, en el caso de los objetos solo se tiene un valor

console.log(numbers);//[ 3, 6, 9, 12 ]

// Los Arreglos se manejan por indices que comienzan en 0

console.log(numbers[0]);//3
console.log(numbers[1]);//6
console.log(numbers[2]);//9

// * Acceder a un arreglo de dos dimensiones

const array2D = [[1,2,3,['hola']],[4,5,6],[7,8,9]];
console.log(array2D[1][1]);//5
console.log(array2D[1][2]);//6
console.log(array2D[0][2]);//3
console.log(array2D[0][3]);//hola