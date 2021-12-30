// ** OBJETOS DENTRO DE OBJETOS **//
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

// * Destructuring a objetos dentro de objetos
const {firstName, description: { ocupation }, description: { loginInfo:{ userName } } } =  data;

console.log(firstName);//Armando Mora Valles
console.log(ocupation);//developer
console.log(userName);//SirMora2

/* 
    En este punto no existe la variable description se 
    esta realizando la destructuracion directamente 
    de la propieda ocupation
*/


