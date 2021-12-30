// ** DECLARACIONES DE STRINGS ** // 

// Colocar comillas convierte a string automaticamente

const product = "Primera forma de declararstring";
const product2 = String('Segunda forma de declararStrin');
const product3 = new String("Objeto de tipo string"); //no es una forma habitual de declaracion

// Pueden declararse tanto con comillas simples como con comillas dobles

// Imprimir comillas
const comillas = "Se le conoce como escapara \"comillas\"";

// Si se usan comillas diferentes en el contenido del string a las utilizadas en la declaracion, no es necesario escapar comillas
const comillas2 = 'No hay necesidad de escapar las comillas dobles ""  ';
const comillas3 = "No hay necesidad de escapar las comillas simples '' ";


console.log(comillas);//Se le conoce como escapara "comillas"