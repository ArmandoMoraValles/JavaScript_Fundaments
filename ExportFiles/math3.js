//** Esta forma sigue la misma logica que en el archivo math2
// En esta se crea el objeto y directamente se escriben las funciones dentro de el 


const operations = {

   add: (x,y) =>{ //Se le puede dar nombre a la funcion o ser una funcion anonima
        return x+y;
    },

    multp: (x,y) =>{
        return x*y;
    }

    //El nombre de la funcion es la propiedad del objeto
}

module.exports = operations //EL objeto es exportado


// o tambien se pueden escribir directamente la funciones en un objeto exportado y creado directamente 

// module.exports = {
//     add: (x,y) =>{ //Se le puede dar nombre a la funcion o ser una funcion anonima
//         return x+y
//     },
// }