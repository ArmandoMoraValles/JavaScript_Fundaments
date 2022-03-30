// * PASO DE PARAMETROS EN METODO CONSTRUCTOR * //
console.clear()

class Person {
 
    /* 
        Se reciben parametros en el metodo constructor para determinar 
        el valor de las propiedades en los objetos resultantes 
    */

    constructor(id, name, phone){ 
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

}

// Se pasa el valor de las propiedades en la instancia de objeto

person1 = new Person(1,'Armando Mora Valles', '648*******');
person2 = new Person(2,'Paola Ileana Meraz Dominguez', '648*******');

/* 
    De esta manera se crean objetos con las mismas propiedades pero diferente valor
    en dichas propiedades 
*/

console.log(person1); //{ id: 1, name: 'Armando Mora Valles', phone: '648*******' }
console.log(person2); //{ id: 2,name: 'Paola Ileana Meraz Dominguez',phone: '648*******'}

