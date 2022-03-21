// ** METODO REDUCE ** //

/*
    Esta funcion recibe como parametro un callback, dicho callback recibe 4 parametros
    valorAnterior (Obligatorio)
    valorActual (Obligatorio)
    indice (Opcional)
    vector (Opcional)
*/

// Esta funcion ejecutara la operacion indicada en el callback para cada elemento del array excepto el primero

const data = [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
    console.log(`El array que se esta trabajando es ${vector}`);
    console.log(`El indice que se esta trabajando es ${indice} con un valor actual de ${valorActual} y valor anterior de ${valorAnterior}`);
    // El valor anterior funciona como un acumulador el cual almacena el valor operacion indicada en el callback segun se vaya recorriendo
    return valorAnterior + valorActual;
  });
console.log(data);


// MISMO EJEMPLO UTILIZANDO FUNCIONES DE FLECHA EN EL CALLBACK

const numbers = [2,2,2];

numbers.reduce( (acc, cur, idx, arr) => {
  console.log(`El array que se esta trabajando es ${arr}`);
  console.log(`El indice que se esta trabajando es ${idx} con un valor actual de ${cur} y valor anterior de ${acc}`);
  return acc + cur;
});

// Version mas corta sumando todos los elementos del arreglo
console.log(numbers.reduce((acc,cur) => acc + cur));
