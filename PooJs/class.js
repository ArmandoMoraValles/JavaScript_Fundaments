// * CLASE **//

// Una clase es en pocas palabras una plantilla de un objeto

console.clear();

const movie = { // Se le llama object literal
    id: 1,
    name: "Harry Potter",

    reproducir(){
        // Con this se indica que se esta accediendo a algo dentro del mismo objeto
        return `Reproduciento la pelicula ${this.name}` // this hace referencia al objeto en el que se encuentra
    }
}

console.log(movie.reproducir());

// * Crear una clase

/*
    En caso de tener diversas peliculas con la misma estrcutura del objeto, (objetos similares)
    realizar un objeto literal por cada pelicula resulta demasiado engorroso
*/

class Movie { //A traves de una clase vamos a crear muchos objetos

    /*
        Para establecer las propiedades por defecto de un objeto
        en una clase se utiliza el metodo constructor
    */

    /* 
        Dentro del metodo constructor se definen las propiedades que
        tendran los objetos creados a partir de la clase
    */

    constructor(){ 
        this.id = 1;
        this.name = 'Harry Potter';
    }

    // Solo puede existir un metodo constructor por clase

}

// * Instanciar un objeto

const movieOne = new Movie(); 
const movieTwo = new Movie(); 
// En los parametros se colocan los parametros pasados al metodo constructor

// Se obtiene el objeto
console.log(movieOne) //Movie { id: 1, name: 'Harry Potter' }
console.log(movieTwo) //Movie { id: 1, name: 'Harry Potter' }