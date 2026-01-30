// S1_VAR_10

function inspect(value) {
    return {
        type: typeof value,
        isArray: Array.isArray(value),
        isNull: value === null,
        isNaN: Number.isNaN(value)
    };
}

// running tests on 8 values as requested
console.log(inspect(100));
console.log(inspect("hello"));
console.log(inspect(null));
console.log(inspect(undefined));
console.log(inspect(true));
console.log(inspect([]));
console.log(inspect({}));
console.log(inspect(NaN));