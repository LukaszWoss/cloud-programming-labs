// S1_VAR_04

function typeLabel(val) {
    if (val === null) {
        return "null";
    }
    return typeof val;
}

// tests
console.log(typeLabel(null));
console.log(typeLabel(undefined));
console.log(typeLabel(123));
console.log(typeLabel("hello"));
console.log(typeLabel({}));
console.log(typeLabel([]));