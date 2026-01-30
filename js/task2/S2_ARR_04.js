// S2_ARR_04

function flatten1(arr) {
    // using standard method to flatten 1 level
    return arr.flat(1);
}

console.log(flatten1([1, [2, 3], [4], 5]));