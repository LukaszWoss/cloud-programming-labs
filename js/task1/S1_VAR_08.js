// S1_VAR_08

function safeAdd(a, b) {
    if (Math.abs(a) > Number.MAX_SAFE_INTEGER || Math.abs(b) > Number.MAX_SAFE_INTEGER) {
        // use bigint
        return BigInt(a) + BigInt(b);
    }
    // use normal number
    return a + b;
}

console.log(safeAdd(10, 20));
console.log(safeAdd(9007199254740991, 10)); // big one