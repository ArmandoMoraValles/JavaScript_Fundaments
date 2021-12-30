// ** SELLAR UN OBJETO ** //

const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
}

// * Prevenir que un objeto sea modificado con seal

Object.seal(data);

// Al objeto estar sellado, no sera posible eliminar una propiedad, pero si editar el valor

//Esto no va ser posible
delete data.status;
//Esto si va ser posible
data.status = true;

console.log(data);

// * Funcion para saber si el objeto se encuentra sellado

    /*

    Esta funcio recibe como parametro un objeto
    devuelve un valor booleano true si es que el objeto se encuentra sellado
    devuelve u valor booleano false si es que elobjeto no se encuentra sellado

    */

    console.log(Object.isSealed(data));//true
