// S1_VAR_06

function classifyNumberLike(x) {
    if (Number.isNaN(x)) {
        return "nan";
    }
    if (typeof x === "number") {
        return "number";
    }
    return "not-a-number";
}

console.log(classifyNumberLike(NaN));
console.log(classifyNumberLike(123));
console.log(classifyNumberLike("123"));