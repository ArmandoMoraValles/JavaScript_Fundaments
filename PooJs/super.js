// ** SUPER ** //
console.clear()
/*
    La clase hija por defecto hereda las propiedades de la clase hijo
    sin embargo en caso de querer agregar nuevas propiedades y usar las
    propiedades de la clase padre es necesario usar super()
*/

class Person {

    constructor(id, name, phone){ 
        this.id = id;
        this.name = name;
        this.phone = phone;
    };

    showName(){
        return `Nombre: ${this.name}`
    }

}

class Student extends Person{

    /*
        En el constructor se pasan como parametros las propiedades de la clase padre
        al igual que la nueva propiedad que sera agregada en esta clase en especifico
    */

    constructor(id, name, phone, carrer){ 
        // Se pasan las propiedades del padre a la funcion super para poder ser usadas con normalidad
        super(id,name,phone); 

        // Se defina la nueva propiedad de esta clase
        this.carrer = carrer; 
    }

    showInfoStudent(){
        return `Estudiante: ${this.name} Carrera: ${this.carrer}`
    }

}

student1 = new Student(1,'Armando Mora Valles', '1387523', 'Programacion');

console.log(student1.showName()); //Nombre: Armando Mora Valles
console.log(student1.showInfoStudent()); //Estudiante: Armando Mora Valles Carrera: Programacion