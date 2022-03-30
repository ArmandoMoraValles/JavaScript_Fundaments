//* METODOS *//
console.clear()

/*
    Cuando una funcion se encuentra dentro de una clase 
    se le conoce como metodo
*/

class Person {
 
    constructor(id, name, phone){ 
        this.id = id;
        this.name = name;
        this.phone = phone;
    };

    showName(){
        return `El nombre de la persona es ${this.name}`
    }

}

person1 = new Person(1,'Armando Mora Valles', '648*******');
person2 = new Person(2,'Paola Ileana Meraz Dominguez', '648*******');

// Ejecucion del metodo showName
console.log(person1.showName()); //El nombre de la persona es Armando Mora Valles
console.log(person2.showName()); //El nombre de la persona es Paola Ileana Meraz Dominguez

// Dentro de una clase pueden haber infinitos metods