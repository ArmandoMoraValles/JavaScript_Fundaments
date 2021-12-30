// ** USO DE THIS **//

const firstName = 'Pedro';

let data = {
    firstName: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
    sayHello: function() {
        console.log(`Hola ${firstName}`); 
        //Esta obteniendo el valor de la variable y no de la propiedad
    }
}

data.sayHello();//Hola pedro

// * Usar this para buscar el valor de la propiedad dentro del obejeto

const firstName2 = 'Pedro';

let data2 = {
    firstName2: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
    sayHello: function() {
        console.log(`Hola ${this.firstName2}`); 
        //Al usar this buscara la variable firstName2 en las propiedades del objeto
    }
}

data2.sayHello();//Hola Armando Mora Valles

// THIS ES UNA FORMA DE REFERIRSE AL OBJETO EN SI MISMO