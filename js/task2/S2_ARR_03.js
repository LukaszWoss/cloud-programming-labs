// S2_ARR_03

function chunk(arr, size) {
    if (size <= 0) return null;
    
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        // slice creates a sub-array
        const piece = arr.slice(i, i + size);
        result.push(piece);
    }
    return result;
}

console.log(chunk([1, 2, 3, 4, 5], 2));