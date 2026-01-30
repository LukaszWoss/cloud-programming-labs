// S2_ARR_01

function cleanNumbers(strings) {
    const numbers = [];
    
    for (let s of strings) {
        let n = Number(s);
        // add only if valid number
        if (!Number.isNaN(n)) {
            numbers.push(n);
        }
    }
    return numbers;
}

console.log(cleanNumbers([" 1 ", "x", "2", "3.5"]));