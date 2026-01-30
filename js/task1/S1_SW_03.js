// S1_SW_03

function calc(a, op, b) {
    switch (op) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/":
            if (b === 0) return null;
            return a / b;
        default:
            return null; // unknown op
    }
}

console.log(calc(10, "+", 2));
console.log(calc(10, "/", 0)); // null