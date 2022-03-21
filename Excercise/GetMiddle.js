function getMiddle(s)
{
    return (s.length/2 - Math.floor(s.length/2)) > 0 ? s[Math.floor(s.length/2)] : `${s[s.length/2 - 1]}${s[s.length/2]}`
}

result = getMiddle("palabra")
console.log(result);