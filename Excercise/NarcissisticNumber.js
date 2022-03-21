//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value){
    value += "";
    let sum = 0;
    
    for(let i = 0; i<value.length; i++){
        sum += Math.pow(Number.parseInt(value[i]),value.length)
    }

    value = Number.parseInt(value);
    return value === sum

}
  
result = narcissistic(153)
console.log(result);