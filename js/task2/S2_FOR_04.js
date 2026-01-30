// S2_FOR_04

function countOccurrences(values) {
    let counts = {};
    
    for (let v of values) {
        if (counts[v]) {
            counts[v]++;
        } else {
            counts[v] = 1;
        }
    }
    return counts;
}

console.log(countOccurrences(["apple", "banana", "apple"]));