// ** CONGELAR UN OBJETO ** //

const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
}

// A pesar de el objeto esta declarado con const es posible reasignar el valor de sus propiedades

data.status = true
data.image =  'imagen1.jpg';

console.log(data);

// * Prevenir que un objeto sea modificado con frezee

// Al objeto estar congelado, no sera posible eliminar o editar una propiedad

Object.freeze(data)

delete data.status;
data.status = 'false'

console.log(data);

// * Funcion para saber si el objeto se encuentra congelado 

    /*

    Esta funcio recibe como parametro un objeto
    devuelve un valor booleano true si es que el objeto se encuentra congelado
    devuelve u valor booleano false si es que elobjeto no se encuentra congelado

    */

console.log(Object.isFrozen(data));//true