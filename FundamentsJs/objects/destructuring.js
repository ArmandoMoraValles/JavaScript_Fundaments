// ** DESTRUCTURACION DE OBJETOS ** //

const data = {

    firstName: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    description: {
        ocupation: 'developer',
        country: 'Mexico',
        especiality: 'JavaScript',
        loginInfo: {
            userName: 'SirMora2',
            key: '239hsdff'
        }       
    },
    array: [1,2,3,4,5,6,7,8,9]
} 

//Antes para extraer una propiedad de un objeto a una variable

const nombre = data.firstName;
const edad = data.age;
console.log(nombre);

// Con la destructuracion de objetos

const { firstName, age } = data; // Se separan por coma las difernetes propiedades a destructurar
console.log(firstName);
console.log(age);


// Se pueden destrucutrar los diferentes tipos de datos tal cual existen en el objeto

// Array
const {arrayy} = data;
console.log(array);

// Objeto
const {description} = data;
console.log(dedescriptions);