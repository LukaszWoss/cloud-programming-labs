// S1_VAR_07

function toNumberOrNull(x) {
    // trying to convert using unary plus
    let n = +x;
    
    // empty string becomes 0, but task implies strictly number parsing
    // but usually +"" is 0. let's check basic requirement
    if (x === "") return null; // edge case often required
    
    if (Number.isNaN(n)) {
        return null;
    }
    return n;
}

console.log(toNumberOrNull("12"));
console.log(toNumberOrNull("abc"));
console.log(toNumberOrNull("12.5"));