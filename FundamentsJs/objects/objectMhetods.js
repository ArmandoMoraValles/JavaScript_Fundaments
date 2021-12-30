// ** 3 METODOS MUY USADOS EN LOS OBJETOS ** //

const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera'
}

// * Retorna un arreglo con el nombre de las propiedades del objeto
console.log(Object.keys(data));

// * Retorna un arreglo con los valores de las propiedades de un objeto
console.log(Object.values(data));

// * Retorna un arreglo de arreglos que contienen el nombre de la propiedad y su valor
console.log(Object.entries(data));