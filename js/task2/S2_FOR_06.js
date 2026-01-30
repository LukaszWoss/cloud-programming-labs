// S2_FOR_06

function sumNested(matrix) {
    let total = 0;
    
    for (let row of matrix) {
        for (let num of row) {
            total += num;
        }
    }
    return total;
}

const m = [
    [1, 2],
    [3, 4, 5],
    [10]
];
console.log(sumNested(m));