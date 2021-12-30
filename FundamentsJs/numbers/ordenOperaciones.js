// ** EL ORDEN DE LAS OPERACIONES ** //
/*

    Primero se ejecuta lo que este dentro de parentesis
    Segundo multiplicaciones y divisiones    
    Tercero sumas y restas


    Nota: Se sigue el orden de asociatividad
    en el caso de tener varias operaciones del mismo nivel
*/

let result = 2 + 2 * 4;
console.log(result);//10

result = 2 * 3 / 1;
console.log(result);//3

// 20%
result = (20 + 30 + 50) * .2
console.log(result);//20

//Sin parentesis primero multiplicaria 50 * .2
result = 20 + 30 + 50 * .2
console.log(result);//60
//Dando como resultado una cantidad erronea