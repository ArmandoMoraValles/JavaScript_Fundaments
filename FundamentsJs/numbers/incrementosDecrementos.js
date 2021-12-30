// ** INCREMENTOS Y DECREMENTOS ** //
console.clear();
let points = 5;

// El valor primero se va mostrar y luego se va incrementar en 1
console.log(points++);

// El valor primero se va incrementar y luego mostrar
console.log(++points);

// El valor primero se va mostrar y luego se va decrementar en 1
console.log(points--);

// El valor primero se va decrementar y luego mostrar
console.log(--points);

// * Operadores de asignacion compuesta

let number = 9;

// en lugar de 
//number = number + 3;
// USAR
number += 3
console.log(number);//12

// en lugar de 
//number = number - 3;
// USAR
number -= 3
console.log(number);//9