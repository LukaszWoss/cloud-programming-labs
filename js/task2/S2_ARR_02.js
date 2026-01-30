// S2_ARR_02

function unique(values) {
    const result = [];
    
    for (let v of values) {
        // if not in result yet, add it
        if (!result.includes(v)) {
            result.push(v);
        }
    }
    return result;
}

console.log(unique([1, 2, 2, 3, 1, 4]));