const months = ['enero','febrero','marzo','abril'];

// *Utilizando un for (LA FORMA CLASICA)

for(let i = 0; i < months.length; i++){
    console.log(months[i]);
}

console.log('---------');

// * Utilizando forEach
months.forEach(element => {
    console.log(element);
})