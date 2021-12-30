// ** AGREGAR O ELIMINAR PROPIEDADES ** //

const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera'
}

// * AGREGAR NUEVAS PROPIEDADES A UN OBJETO
data.gender = 'Masculino';
data.status = true;

console.log(data);

// * ELIMINAR UNA PROPIEDAD DE UN OBJETO
delete data.status;
console.log(data);