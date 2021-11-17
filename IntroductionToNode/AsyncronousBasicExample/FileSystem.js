const fs = require('fs');

const name = 'Armando Mora Valles'

/* 
    la funcion wirtefile recibe 3 parametros
    1. la ruta donde se guardara el archivo
    2. Lo que sera escrito en el archivo
    3. un callback
*/

/*
El callback es una funcion que se ejecuta cuando a terminado 
el proceso anterior (funcion generalmente anonima)
*/

fs.writeFile('./plainText', `Hola mi nombre es ${name}`, (err) =>{
    //EL parametro mas tipico manejado en el callback es el de error,
    if(err) return console.log(`El error es ${err}`); 
    //De existir un error, se imprimira en consola y el return terminara la ejecucion del callback
    console.log("Luego esta linea de codigo de archivo creado");
    //De no existir error seguira la ejeccucion de el callback

    fs.readFile('./plainText',"utf-8", (err, data)=>{
        if(err) return console.log(err);
        console.log("Archivo leido");
        console.log(data); //Devuleve un Buffer sin formato si no se especifica ninguna codificacion
        //aqui se especifico la codificacion "utf-8", el contnido del archivo .txt aparecera en consola
        //Alternativa sin codificacion... data.toString();
    })
    
    //Con callbacks anidado se asegura el rumbo de la ejecucion como es desada por el programador
    //Sin embargo el anidar muchos callbacks se le conoce como CALLBACK HELL

})

//Esta instruccion Node.js solo la lee, pero es ejecutada por el sistema operativo, por lo que, Node.js no espera a que esta instruccion termine, 
//si no que, mas bien continua con la ejecucion de las demas instrucciones

// A ESTA CLASE DE CODIGO SE LE CONOCE COMO CODIGO ASINCRONO O TAMBIEN NO BLOQUEANTE

console.log("Primero se vera esta linea de codigo");

//Gracias a esto Node.js puede manejar una enorme cantidad de usuarios concurrentes