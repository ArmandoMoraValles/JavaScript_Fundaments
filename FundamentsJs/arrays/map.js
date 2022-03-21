// ** METODO MAP ** //
 
/* 
    Similar a un for each pero con la diferencia de que no solo manipula un arreglo, 
    si no que tambien retorna un nueva array copia del original o modificado segun lo que sea
    indicado en el callback
*/

numbers = [2,4,6,8];

const numbersInString = numbers.map((element) => element += "")

console.log(numbersInString);

//En los callabacks se procura aprovecharse de el return implicito y de la ausencia de parentesisis si solo existe un paramtro

const numbersInString2 = numbers.map((element, index, array) => {
    console.log(`El elemento es ${element} y el index es ${index}`);
})

console.log(numbersInString);