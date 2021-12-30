// ** CONCATENACION DE SRINGS **//

const firstName = "Armando";
const firstLastName = "Mora";

// Conctatenar usando una metodo de strings
console.log(firstName.concat(firstLastName)); //ArmandoMora

// Concatenar con operador
console.log("Hola mi ciudad es " + firstName + firstLastName);//Hola mi ciudad es ArmandoMora

// Concatenar con template String o Template literal
console.log(`Hola ni ciudad es ${firstName} ${firstLastName}`);//Hola mi ciudad es Armando Mora
// Las comillas que se emplean se llaman backticks
// Esta es la mejor manera de concatenar Strings

// Es mas facil escapar comillas usando backticks
console.log(`Esta es la manera mas "comoda" 'de' escapar comillas`);

// Tambien se pueden declarar Strings utilizando las backticks pero es menos habitual
const data = `Hola`;
console.log(data);//Hola