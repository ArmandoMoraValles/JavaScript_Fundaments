// ** BUENAS PRACTICAS A LA HORA DE COMPARAR BOOLEANS ** //

const autentication = true;

// IF

if(autentication == true){
    console.log('IF');
} else {
    console.log('ELSE');
} // Esta es una manera desaconsejada de coomparar booleans

if(autentication){
    console.log('IF');
} else {
    console.log('ELSE');
} // Esta es una mejor manera de comparar los booleans

// OPERADO TERNARIO

console.log(autentication ? 'IF' : 'ELSE');