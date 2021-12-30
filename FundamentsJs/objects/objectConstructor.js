// ** OBJECT CONSTRUCTOR **//

//Object literal
const data = {
    name: 'Armando Mora Valles',
    age: 21,
    address: 'Calle Primera',
    status: false,
}

// Object Constructor

// Se define una funcion la cual al ser ejectuada con el operador new creara nuevos objetos

//Se recibe en los parametros variables con los valores a asignar a las propiedades

function opc(name, status){
    /*
        Utilizando el operador this y el nombre de la propiedad deseada 
        se establecen las propiedades que contendra el objeto
    */
    this.name = name
    this.status = status
    this.otraPropiedad = 'Se le puede dar valor directamente'
}

/* 
    dentro de data2 se creara un nuevo objeto al utilizar el operador new 
    y llamada a la funcion que creara el objeto
*/

// Se pasa como parametros los valores de las propiedades
const data2 = new opc('Pedro Pedrin', false);

console.log(data2);

// Esta es una manera mas dinamica de crear objetos pero es menos utilizada
