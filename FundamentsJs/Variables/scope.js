// ** SCOPE DE LAS VARIABLES EN JS //

// Las variables declarad con let y const tienene el mismo Scope
// Las varianles declaradas con var tienen un scope mas amplio por lo que su uso esta desaconsejado

const testFunction = () => {

    for(let i = 0; i<3; i++){

        let variableLet = 'Esta es una variable con let';
        const variableConst = 'Esta es una varianle con const';
        var variableVar = 'Esta es una variable con var';

        console.log(variableLet); // Las variables con let solo podran ser usadas dentro del bloque de codigo que son declaradas
        console.log(variableConst); // Las variables con const solo podran ser usadas dentro del bloque de codigo que son declaradas

        const testFunction2 = () => {

            console.log(variableLet); // Este bloque de codigo esta dentro de el bloque dode se hace la declaracion...
            console.log(variableConst); // por lo que podran se utilizadas sin problema

            // El scope va de afuera hacia adentro
        }

    }

    console.log(variableVar); // EL ambito de la variable con var es toda la funcion que la contiene 

    //console.log(variableLet); //!ERROR // Fuera del ambito donde a sido declarada no podra ser utilizada
    //console.log(variableConst); //!ERROR // Fuera del ambito donde a sido declarada no podra ser utilizada

}

testFunction();