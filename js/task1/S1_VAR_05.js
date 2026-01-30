// S1_VAR_05

function isArray(val) {
    // using standard method as requested
    return Array.isArray(val);
}

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray(null)); // false