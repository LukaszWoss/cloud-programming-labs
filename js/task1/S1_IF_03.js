// S1_IF_03

function normalizeName(input) {
    // check if falsy (empty, null, etc)
    if (!input) {
        return "Anonymous";
    }
    return input.trim();
}

console.log(normalizeName(""));
console.log(normalizeName(null));
console.log(normalizeName("  John  "));