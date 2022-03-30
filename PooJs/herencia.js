// * HERENCIA * //
console.clear();

/* 
    La herencia sirve para heredar las propiedades
    de una clase a otra
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

// La clase estudiante va a extender de la clase persona

class Student extends Person{

    /*
        No hace falta declarar nuevamente las propiedades que ya estan
        contenidas en la clase padre
    */

    showNameStudent(){
        return `El nombre del estudiante es ${this.name}`;
    }
}

const Student1 = new Student(8, 'Sir Mora', '9176w284172');

/*
    Se pueden utilizar tanto los metodos declarados en la clase padre
    como los metodos declarados en la clase hija
*/

console.log(Student1.showName()); //El nombre de la persona es Sir Mora
console.log(Student1.showNameStudent()); //El nombre del estudiante es Sir Mora

/* 
    En pocas palabra todo lo disponible en la clase padre
    estara igualmente disponible en la clase hija pero lo declarado
    en la clase hija no estara disponible en la clase padre
*/