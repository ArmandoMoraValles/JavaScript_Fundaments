//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
function findShort(s){
    return Math.min(...s.split(' ').map(element => element.length));
}

const result = findShort("oin take over the world maybe who knows perhaps")
console.log(result);