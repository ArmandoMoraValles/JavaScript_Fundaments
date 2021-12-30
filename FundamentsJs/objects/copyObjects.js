// ** COPIAR 2 OBJETOS ** //

const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
}

const client = {
    ocupation: 'Programmer',
    gender: 'female'
}

// * Copiar utilizando una funcion

    /*
        Esta funcion recibe como parametros todos los objetos que se uniran en 1
    */

const result1 = Object.assign(data, client)
console.log(result1)


// * Copiar utilizando spread operator o rest operator

const result2 = {...data, ...client}
console.log(result2);
